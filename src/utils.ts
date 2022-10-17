import { Account, Image, User } from '../types';
import { Row } from './components';

const compareNumbers = (a: number) => (b: number) => a - b;
const compareDate = (a: Date) => (b: Date) =>
  compareNumbers(a.getTime())(b.getTime());
const toDate = (str: string) => new Date(str);
const compareDateString = (a: string) => (b: string) =>
  compareDate(toDate(a))(toDate(b));
const getMaxPayment = (acc: Account) =>
  [...acc.payments].sort((a, b) => compareDateString(a.date)(b.date)).pop()
    ?.totalSum ?? 0;
const findById =
  <T extends { userID: string }>(arr: T[]) =>
  (id: string) =>
    arr.find(el => el.userID === id);

export const buildTableData = ([images, users, accounts]: [
  Image[],
  User[],
  Account[]
]): Row[] =>
  users.map(u => {
    const userImage = findById(images)(u.userID);
    const userAccount = findById(accounts)(u.userID);
    return {
      avatar: userImage.url,
      username: u.username,
      country: u.country,
      name: u.name,
      posts: userAccount.posts,
      lastPayments: getMaxPayment(userAccount),
    };
  });

export function compose<T>(...fns: ((arg: T) => T)[]) {
  return (arg: T) => {
    return fns.reduceRight((acc, fn) => fn(acc), arg);
  };
}

const isMatched = (pattern: string) => (str: string) =>
  str.toLowerCase().includes(pattern.toLowerCase());
const getRowField = (field: keyof Row) => (row: Row) => row[field];
const matchedByField =
  (field: keyof Row) => (searchStr: string) => (row: Row) =>
    isMatched(searchStr)(`${getRowField(field)(row)}`);

export const search = (value: string) => (list: Row[]) => {
  if (!value) {
    return list;
  }
  return list.filter(
    row =>
      matchedByField('name')(value)(row) ||
      matchedByField('username')(value)(row) ||
      matchedByField('country')(value)(row)
  );
};

const getPaymentField = (row: Row) => Number(getRowField('lastPayments')(row));
const comparePayments = (order: string) => (a: Row, b: Row) =>
  (order === `asc` ? 1 : -1) *
  compareNumbers(getPaymentField(a))(getPaymentField(b));

export const sortByPayments = (value: string) => (list: Row[]) =>
  [...list].sort(comparePayments(value));

export const filterByPost = (value: string[]) => (list: Row[]) => {
  if (!value || value.length === 0) {
    return list;
  }
  let result = [];
  if (value.includes('Without posts')) {
    result = [...result, ...list.filter(v => v.posts === 0)];
  }
  if (value.includes('More than 100 posts')) {
    result = [...result, ...list.filter(v => v.posts >= 100)];
  }
  return result;
};

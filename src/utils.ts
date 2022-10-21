import { Account, Image, User } from '../types';
import { Row } from './components';

const compareNumbers = (a: number) => (b: number) => a - b;
const compareDate = (a: Date) => (b: Date) =>
  compareNumbers(a.getTime())(b.getTime());
const compareDateString = (a: string) => (b: string) =>
  compareDate(new Date(a))(new Date(b));
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

export const identity = <T>(x: T) => x;

export function compose<T>(...fns: ((arg: T) => T)[]) {
  return (arg: T) => fns.reduceRight((acc, fn) => fn(acc), arg);
}

export function composePredicates<T>(...fns: ((arg: T) => boolean)[]) {
  return (arg: T) => fns.reduceRight((acc, fn) => fn(arg) || acc, false);
}

export const filter = (predicate: (row: Row) => boolean) => (list: Row[]) =>
  [...list].filter(predicate);

const isMatched = (pattern: string) => (str: string) => {
  if (!pattern) return false;
  return str.toLowerCase().includes(pattern.toLowerCase());
};
const getRowField = (field: keyof Row) => (row: Row) => row[field];
const matchedByField =
  (field: keyof Row) => (searchStr: string) => (row: Row) =>
    isMatched(searchStr)(`${getRowField(field)(row)}`);

export const getSearchFilter = (value: string) =>
  composePredicates<Row>(
    matchedByField('name')(value),
    matchedByField('username')(value),
    matchedByField('country')(value)
  );

const getPaymentField = (row: Row) => Number(getRowField('lastPayments')(row));
const comparePayments = (order: string) => (a: Row, b: Row) =>
  (order === `asc` ? 1 : -1) *
  compareNumbers(getPaymentField(a))(getPaymentField(b));

export const sortByPayments = (value: string) => (list: Row[]) => {
  if (!value) return list;
  return [...list].sort(comparePayments(value));
};

export const getPostFilter = (value: string[]) => {
  let result = (row: Row) => false;
  if (value.includes('Without posts')) {
    result = composePredicates<Row>(result, row => row.posts === 0);
  }
  if (value.includes('More than 100 posts')) {
    result = composePredicates<Row>(result, row => row.posts >= 100);
  }
  return result;
};

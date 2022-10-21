import { StyledEngineProvider } from '@mui/material/styles';
import { FC, useEffect, useState } from 'react';

import { Account, Image, User } from '../types';
import { Filters, Row, Search, Sort, Table } from './components';
import { getAccounts, getImages, getUsers } from './mocks/api';
import {
  buildTableData,
  compose,
  composePredicates,
  filter,
  getPostFilter,
  getSearchFilter,
  identity,
  sortByPayments,
} from './utils';

import styles from './App.module.scss';

interface ViewSetting {
  filters: string[];
  search: string;
  order: string;
}

export const App: FC = () => {
  const [data, setData] = useState<Row[]>([]);
  const [viewSetting, setViewSetting] = useState<ViewSetting>({
    filters: [],
    search: '',
    order: null,
  });

  useEffect(() => {
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        setData(buildTableData([images, users, accounts]));
      }
    );
  }, []);

  const transformData = compose<Row[]>(
    sortByPayments(viewSetting.order),
    viewSetting.search || viewSetting.filters?.length
      ? filter(
          composePredicates<Row>(
            getSearchFilter(viewSetting.search),
            getPostFilter(viewSetting.filters)
          )
        )
      : identity
  );

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters
              selected={viewSetting.filters}
              updateSelected={v =>
                setViewSetting({ ...viewSetting, filters: v })
              }
            />
            <Sort
              selected={viewSetting.order}
              updateSelected={v => setViewSetting({ ...viewSetting, order: v })}
            />
          </div>
          <Search
            selected={viewSetting.search}
            updateSelected={v => setViewSetting({ ...viewSetting, search: v })}
          />
        </div>
        <Table rows={transformData(data)} />
      </div>
    </StyledEngineProvider>
  );
};

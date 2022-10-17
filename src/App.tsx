import { StyledEngineProvider } from '@mui/material/styles';
import { FC, useEffect, useState } from 'react';

import { Account, Image, User } from '../types';
import { Filters, Row, Search, Sort, Table } from './components';
import { getAccounts, getImages, getUsers } from './mocks/api';
import rows from './mocks/rows.json';
import {
  buildTableData,
  compose,
  filterByPost,
  search,
  sortByPayments,
} from './utils';

import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

interface ViewSetting {
  filters: string[];
  search: string;
  order: string;
}

export const App: FC = () => {
  const [data, setData] = useState<Row[]>(mockedData);
  const [viewSetting, setViewSetting] = useState<ViewSetting>({
    filters: [],
    search: '',
    order: 'desc',
  });

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const transform = compose<Row[]>(
          sortByPayments(viewSetting.order),
          search(viewSetting.search),
          filterByPost(viewSetting.filters)
        );
        setData(transform(buildTableData([images, users, accounts])));
      }
    );
  }, [viewSetting]);

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
        <Table rows={data} />
      </div>
    </StyledEngineProvider>
  );
};

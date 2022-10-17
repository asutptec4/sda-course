import { useState, FC } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

// interface SearchProps {
//   store?: {};
//   updateStore?: (val) => void;
// }

// OR

interface SearchProps {
  selected: string;
  updateSelected: (value: string) => void;
}

// OR store can be global

export const Search: FC<SearchProps> = props => {
  const onChange = value => {
    console.log(value); // for debugging
    props.updateSelected(value);
  };

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={props.selected}
      type="search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      onChange={e => onChange(e.target.value)}
    />
  );
};

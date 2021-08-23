import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.scss';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

function Header() {
  return (
    <header className={ styles.header }>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}

export default hot(Header);

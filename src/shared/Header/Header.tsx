import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.scss';
import { IHeaderProps } from './interfaces';
import { SearchBlock } from './SearchBlock';
import { MessageBlock } from './MessageBlock';
import { ProfileBlock } from './ProfileBlock';

function Header({ title }: IHeaderProps): JSX.Element {
  return (
    <header className={ styles.header }>
      <div className={ styles.container }>
        <h1 className={ styles['thread-title'] }>
          { title }
        </h1>
        <div className={ styles.wrapper }>
          <MessageBlock className={ styles.headerMessage } />
          <SearchBlock className={ styles.headerSearch } />
          <ProfileBlock className={ styles.headerProfile }/>
        </div>
      </div>
    </header>
  );
}

export default hot(Header);

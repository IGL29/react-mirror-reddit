// Vendors
import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
// Internals
import { IHeaderProps } from './interfaces';
import { SearchBlock } from './SearchBlock';
import { MessageBlock } from './MessageBlock';
import { ProfileBlock } from './ProfileBlock';
import { DropDown } from '@shared/DropDown';
import { GenericList } from '@shared/GenericList';
import { generateId } from '@utils/react/generateRandomIndex';
import { dataCategory } from './dataCategory';
import styles from './header.scss';
// import { tokenContext } from '../context/tokenContext';

const dataCategoryWithId = dataCategory.map((item) => ({
  ...generateId(item),
  As: 'button' as 'button',
  className: styles.itemList,
}));

function Header({ title }: IHeaderProps): JSX.Element {

  const node = document.querySelector('#dropdown_root');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles['thread-title']}>{title}</h1>

        <div className={styles.wrapDropdown}>
          <DropDown
            button={<button className={styles.dropDownButton}>Лучшие</button>}
          >
            <GenericList
              list={dataCategoryWithId}
              className={styles.containerList}
            />
          </DropDown>
        </div>

        <div className={styles.wrapper}>
          <MessageBlock className={styles.headerMessage} />
          <SearchBlock className={styles.headerSearch} />
          {/* <Consumer>
            {(token) => <ProfileBlock token={token} className={styles.headerProfile} />}
          </Consumer> */}
          <ProfileBlock className={styles.headerProfile} />
        </div>
      </div>
    </header>
  );
}

export default hot(Header);

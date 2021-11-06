import React from 'react';
import styles from './sortblock.scss';
import { IItemSortData } from './interfaces';
import { sortData } from './sortData';
import { generateRandomString } from '../../../utils/react/generateRandomIndex';

export default function SortBlock(): JSX.Element {
  return (
    <div className={ styles.container }>
      <div className={ styles.sortContainer }>
        {
          sortData.map((item: IItemSortData) => (
            <button className={ styles.button } key={ generateRandomString() }>{ item.title }</button>
          ))
        }
      </div>
    </div>
);
}

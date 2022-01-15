// Vendor
import React, { useContext } from 'react';
// Internals
import { Card } from './Card';
import styles from './cardList.scss';
import {postsContext} from '../context/postsContext';

export default function CardList(): React.ReactElement {
  const data = useContext(postsContext);
  console.log('DATA_LIST: ', data)

  return (
    <ul className={styles['cards-list']}>
      <Card />
    </ul>
  );
}

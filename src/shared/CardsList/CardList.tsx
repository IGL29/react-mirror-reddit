// Vendor
import React, { useContext } from 'react';
// Internals
import { Card } from './Card';
import styles from './cardList.scss';
import {postsContext} from '../context/postsContext';

export default function CardList(): React.ReactElement {
  const dataCards = useContext(postsContext);

  return (
    <ul className={styles['cards-list']}>
      {dataCards.map((data) => <Card key={data?.data?.id} data={data} />)}
    </ul>
  );
}

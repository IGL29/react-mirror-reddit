// Vendor
import React from 'react';
// Internals
import { Card } from './Card';
import styles from './cardList.scss';

export default function CardList(): React.ReactElement {
  return (
    <ul className={styles['cards-list']}>
      <Card />
    </ul>
  );
}

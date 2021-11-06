import React from 'react';
import {Card} from './Card';
import styles from './cardList.scss';

export default function CardList(): JSX.Element {
  return (
    <ul className={styles['cards-list']}>
      <Card/>
    </ul>
  );
}

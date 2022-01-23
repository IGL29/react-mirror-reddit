// Vendor
import React, { useContext } from 'react';
// Internals
import { Card } from './Card';
import styles from './cardList.scss';
import {postsContext} from '../context/postsContext';

interface IData {
  data: {
    id: string
    title: string
    author: string
    created: string
    url: string
    preview: {
      images: [
        {source:
          {url: string}
        }
      ]
    }
    num_comments: number
  }
}

export default function CardList(): React.ReactElement {
  const dataCards = useContext(postsContext);

  return (
    <ul className={styles['cards-list']}>
      {dataCards.map((data: IData) => <Card key={data?.data?.id} data={data} />)}
    </ul>
  );
}

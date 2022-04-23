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
  const {data, isLoading, errorLoading, bottomOfList,  setIsLoadMoreCards, isLoadMoreCards} = useContext(postsContext);

  return (
    <ul className={styles['cards-list']}>
      {data.length === 0 && !isLoading && !errorLoading && (
        <div>Нет ни одного поста</div>
      )}

      {data.map((data: IData) => <Card key={data?.data?.id} data={data} />)}

      <div ref={bottomOfList}/>

      {isLoading && 'Загрузка'}

      {!isLoadMoreCards && (<button onClick={() => setIsLoadMoreCards(true)}>Загрузить еще</button>)}

      {errorLoading && (
        <div role="alert">
          {errorLoading}
        </div>
      )}
    </ul>
  );
}

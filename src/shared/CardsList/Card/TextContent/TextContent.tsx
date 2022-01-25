// Vendors
import React, {useState} from 'react';
import cn from 'classnames';
// Internals
import {MetaData} from '@shared/CardsList/Card/MetaData';
import styles from './title.scss';
import {Post} from '@shared/Post';

interface ITextContentProps {
  className?: string;
  author: string
  url: string
  title: string
  created: string
}

export default function TextContent({className = '', author, url, title, created}: ITextContentProps): JSX.Element {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={cn(styles['text-content'], className)}>
      <MetaData created={created} author={author}/>

      <h2 className={styles.title}>
        <a href='#post-url' onClick={() => setIsModalOpened(!isModalOpened)} className={styles.postLink}>
          {title}
        </a>
      </h2>

    {isModalOpened && <Post onClose={() => setIsModalOpened(false)} />}
    </div>
  )
}

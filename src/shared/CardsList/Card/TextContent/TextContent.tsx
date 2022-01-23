// Vendors
import React from 'react';
import cn from 'classnames';
// Internals
import {MetaData} from '@shared/CardsList/Card/MetaData';
import styles from './title.scss';

interface ITextContentProps {
  className?: string;
  author: string
  url: string
  title: string
  created: string
}

export default function TextContent({className = '', author, url, title, created}: ITextContentProps): JSX.Element {
  return (
    <div className={cn(styles['text-content'], className)}>
      <MetaData created={created} author={author}/>

      <h2 className={styles.title}>
        <a href={url} className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
  )
}

// Vendors
import React, {useState} from 'react';
import cn from 'classnames';
// Internals
import {MetaData} from '@shared/CardsList/Card/MetaData';
import styles from './title.scss';
import { Link } from 'react-router-dom';

interface ITextContentProps {
  className?: string;
  author: string
  url: string
  title: string
  created: string
  permalinkComments: string
}

export default function TextContent({className = '', author, title, created, permalinkComments}: ITextContentProps): JSX.Element {

  const openModal = () => {
    document.body.style.overflow ='hidden';
  }

  return (
    <div className={cn(styles['text-content'], className)}>
      <MetaData created={created} author={author}/>

      <h2 className={styles.title}>
        <Link to={`/posts/${permalinkComments}`} onClick={ openModal } className={styles.postLink}>
          {title}
        </Link>
      </h2>
    </div>
  )
}

// Vendors
import React from 'react';
import cn from 'classnames';
// Internals
import {MetaData} from '@shared/CardsList/Card/MetaData';
import styles from './title.scss';

interface ITextContentProps {
  className?: string;
}

export default function TextContent({className = ''}: ITextContentProps): JSX.Element {
  return (
    <div className={cn(styles['text-content'], className)}>
      <MetaData/>

      <h2 className={styles.title}>
        <a href="#article" className={styles.postLink}>
          Реплицированные с зарубежных источников возможности
        </a>
      </h2>
    </div>
  )
}

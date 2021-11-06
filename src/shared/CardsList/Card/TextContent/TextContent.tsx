import React from 'react';
import styles from './title.scss';
import { MetaData } from '../MetaData';

export default function TextContent(): JSX.Element {
  return (
    <div className={ styles['text-content'] }>
      <MetaData />

      <h2 className={ styles.title }>
        <a href="#article" className={ styles.postLink }>
          Реплицированные с зарубежных источников возможности
        </a>
      </h2>
    </div>
  )
}

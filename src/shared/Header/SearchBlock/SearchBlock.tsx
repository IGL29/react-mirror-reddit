import React from 'react';
import cn from 'classnames';
import * as Icons from '@Icons';
import styles from './searchBlock.scss';

interface ISearchBlockProps {
  className?: string;
}

export default function SearchBlock({ className }: ISearchBlockProps): JSX.Element {
  return(
    <div className={ cn(styles.container, className) }>
      <input className={ styles.input } type="text" placeholder="Поиск" />
      <button className={ styles.button }>
        <Icons.SearchIcon />
      </button>
    </div>
  );
}

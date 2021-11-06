import React from 'react';
import cn from 'classnames';
import styles from './searchBlock.scss';

interface ISearchBlockProps {
  className?: string;
}

export default function SearchBlock({ className }: ISearchBlockProps): JSX.Element {
  return(
    <div className={ cn(styles.container, className) }>
      <input className={ styles.input } type="text" placeholder="Поиск" />
      <button className={ styles.button }></button>
    </div>
  );
}

import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from '../header.scss';

console.log(styles);

export function Header() {
  return(
    <header>
      <h1 className={styles.title}><span className={styles.span}>Hello</span> React</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);

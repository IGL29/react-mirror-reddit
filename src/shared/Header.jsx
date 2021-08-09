import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './styles/header.scss';

function HeaderComponent() {
  return(
    <header>
      <h1 className={styles.title}><span className={styles.span}>Hello</span> React</h1>
    </header>
  );
}

export default hot(HeaderComponent);

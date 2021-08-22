import { hot } from 'react-hot-loader/root';
import React from 'react';
import styles from './header.scss';

interface IContentProps {
  children?: React.ReactNode;
}

function Header({ children }: IContentProps) {
  return (
    <header className={ styles.header }>
      { children }
    </header>
  );
}

export default hot(Header);

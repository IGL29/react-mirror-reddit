import React, { Children } from "react";
import styles from './container.scss';

interface IContainer {
  children: React.ReactNode
}

const Container: React.FC<IContainer> = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Container;

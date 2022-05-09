import React from 'react';
import styles from './styles.scss'

const PageNotFound: React.FC = ():JSX.Element => {
  return (
    <div className={styles.notFound}>404 - Page not found</div>
  )
}

export default PageNotFound;

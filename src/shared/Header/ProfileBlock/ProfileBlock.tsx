import React from 'react';
import cn from 'classnames';
import styles from './profileBlock.scss';
import avatar from '@img/avatar.png';

interface IProfileBlockProps {
  className: string;
}

export default function ProfileBlock({className}: IProfileBlockProps): JSX.Element {
  return (
    <button className={cn(styles.button, className)}>
      <img className={styles.img} src={avatar} alt="Константин"/>
      <p className={styles.text}>Константин</p>
    </button>
  )
}

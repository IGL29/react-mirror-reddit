import React from 'react';
import cn from 'classnames';
import styles from './profileBlock.scss';

interface IProfileBlockProps {
  className: string;
}

export default function ProfileBlock({ className }: IProfileBlockProps): JSX.Element {
  return (
    <button className={ cn(styles.button, className) }>
      <img className={ styles.img } src="../../../../public/img/avatar.png" alt="Константин" />
      <p className={ styles.text }>Константин</p>
    </button>
  )
}

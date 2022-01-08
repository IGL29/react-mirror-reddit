import React from 'react';
import cn from 'classnames';
import styles from './messageBlock.scss';
import { Icons, EComponents } from '@Icons';

const countMessageData = 10;

interface IMessageBlockProps {
  className?: string;
}

export default function MessageBlock({
  className,
}: IMessageBlockProps): JSX.Element {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.count}>
        <span className={styles.countText}>{countMessageData}</span>
      </div>
      <button className={styles.button}>
        <Icons name={EComponents.MessageIcon} />
      </button>
    </div>
  );
}

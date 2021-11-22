// Vendor
import React from 'react';
import cn from 'classnames';
// Internals
import styles from './preview.scss';

interface IPreviewProps {
  className?: string;
}

export default function Preview({className = ''}: IPreviewProps): JSX.Element {
  return (
    <div className={cn(styles.preview, className)}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/2424774/screenshots/16289478/media/9f74e74364ca09bce0004bcc17ba1bd5.png?compress=1&resize=400x300"
        alt=""
      />
    </div>
  );
}

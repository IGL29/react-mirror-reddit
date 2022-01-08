// Vendor
import React from 'react';
import { Icons, EComponents } from '@shared/Icons';
// Internals
import styles from './menuButton.scss';

export default function MenuButton() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <Icons name={EComponents.MenuIcon} size={20} />
      </button>
    </div>
  );
}

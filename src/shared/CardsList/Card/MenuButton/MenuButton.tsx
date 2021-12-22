// Vendor
import React from 'react';
import {MenuIcon} from "@shared/Icons";
// Internals
import styles from './menuButton.scss';

export default function MenuButton() {
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton}>
        <MenuIcon/>
      </button>
    </div>
  )
}

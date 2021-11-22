// Vendor
import React from 'react';
// Internals
import {KarmaCounter} from './KarmaCounter';
import {CommentsButton} from './CommentsButton';
import {ShareButton} from './ShareButton';
import {SaveButton} from './SaveButton';
import styles from './controls.scss';

export default function ControlsButton() {
  return (
    <div className={styles.controls}>
      <KarmaCounter/>
      <CommentsButton/>

      <div className={styles.actions}>
        <ShareButton/>
        <SaveButton/>
      </div>
    </div>
  )
}

// Vendor
import React from 'react';
// Internals
import {KarmaCounter} from './KarmaCounter';
import {CommentsButton} from './CommentsButton';
import {ShareButton} from './ShareButton';
import {SaveButton} from './SaveButton';
import styles from './controls.scss';

interface IControlsButtonProps {
  countComments: number
}

export default function ControlsButton({countComments}: IControlsButtonProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter/>
      <CommentsButton countComments={countComments} />

      <div className={styles.actions}>
        <ShareButton/>
        <SaveButton/>
      </div>
    </div>
  )
}

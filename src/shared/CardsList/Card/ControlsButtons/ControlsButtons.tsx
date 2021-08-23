import React from 'react';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

export default function ControlsButton() {
  return(
    <div className={ styles.controls }>
      <KarmaCounter />
      <CommentsButton />

      <div className={ styles.actions }>
        <ShareButton />
        <SaveButton />
      </div>
  </div>
  )
}

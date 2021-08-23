import React from 'react';
import styles from './card.scss';
import { Menu } from './Menu';
import { ControlsButtons } from './ControlsButtons';
import { TextContent } from './TextContent';
import { Preview } from './Preview';

export default function Card() {
  return (
    <li className={ styles.card }>
        <TextContent />
        <Preview />
        <Menu />
        <ControlsButtons />
    </li>
  );
}

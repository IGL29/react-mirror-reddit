// Vendor
import React from 'react';
// internals
import {MenuButton} from './MenuButton';
import {menuPostData} from './menuPostData';
import {ControlsButtons} from './ControlsButtons';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import cn from 'classnames';
import {DropDown} from '@shared/DropDown';
import {generateId} from '@utils/react/generateRandomIndex';
import {GenericList} from "@shared/GenericList";
import styles from './card.scss';

const menuPostDataWithID = menuPostData.map((item) => ({
  ...generateId(item),
  As: 'button' as 'button',
  className: styles.item,
}));

export default function Card(): JSX.Element {
  return (
    <li className={styles.card}>
      <div className={styles.wrapper}>
        <TextContent/>
        <Preview/>
      </div>

      <DropDown button={<MenuButton/>}>
        <GenericList list={menuPostDataWithID} className={styles['list-container']}/>
      </DropDown>
      <ControlsButtons/>
    </li>
  );
}

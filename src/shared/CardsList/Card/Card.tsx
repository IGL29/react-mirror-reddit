import React from 'react';
import styles from './card.scss';
import {MenuButton} from './MenuButton';
import {menuPostData} from './menuPostData';
import {ControlsButtons} from './ControlsButtons';
import {TextContent} from './TextContent';
import {Preview} from './Preview';
import {DropDown} from '../../DropDown';
import {generateId} from '../../../utils/react/generateRandomIndex';
import {GenericList} from "../../GenericList";

const menuPostDataWithID = menuPostData.map((item) => ({
  ...generateId(item),
  As: 'button',
}));

export default function Card(): JSX.Element {
  return (
    <li className={styles.card}>
      <TextContent/>
      <Preview/>
      <DropDown button={<MenuButton/>}>
        <GenericList list={menuPostDataWithID}/>
      </DropDown>
      <ControlsButtons/>
    </li>
  );
}

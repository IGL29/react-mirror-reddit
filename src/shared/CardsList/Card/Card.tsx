// Vendor
import React from 'react';
// internals
import {MenuButton} from './MenuButton';
import {menuPostData} from './menuPostData';
import {ControlsButtons} from './ControlsButtons';
import {TextContent} from './TextContent';
// import cn from 'classnames';
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
        <div className={styles.imgWrapper}>
          <img
            className={styles.previewImg}
            src="https://luchanka.com.ua/wp-content/uploads/2017/07/christmas-fun-1000x600.jpg"
            alt=""
          />
        </div>
        <TextContent/>
      </div>

      <div className={styles.wrapButtons}>
      <DropDown button={<MenuButton/>}>
        <div className={styles['dropdown-content-wrapper']}>
          <GenericList list={menuPostDataWithID} className={styles['list']}/>
          <button className={styles.buttonClose}>Закрыть</button>
        </div>
          </DropDown>
          <ControlsButtons/>
      </div>
    </li>
  );
}

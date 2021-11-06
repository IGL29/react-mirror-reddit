import React from 'react';
import cn from 'classnames';
import styles from './menuList.scss';
import {IMenuItem, IMenuListProps} from './interfaces';

export default function MenuList({data, settings}: IMenuListProps): JSX.Element {
  const isSetIcon = settings?.icon;
  const isSetButtonClose = settings?.buttonCLose;
  const isSetLine = settings?.line;

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          data.map((dataItem: IMenuItem) => {
            const styleBackgroundImage = (isSetIcon) ? {backgroundImage: `url(${dataItem.icon})`} : {};

            return (
              <li className={cn(styles.item, {itemLine: isSetLine})} key={dataItem.id}>
                <button
                  style={styleBackgroundImage}
                  className={cn(styles.button, {buttonBackground: isSetIcon})}
                >{dataItem.text}</button>
              </li>
            )
          })
        }
      </ul>
      {!isSetButtonClose || <button className={styles.btnClose}>Закрыть</button>}
    </div>
  )
}

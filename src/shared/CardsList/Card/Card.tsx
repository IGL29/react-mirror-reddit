// Vendor
import React, {useState, useEffect} from 'react';
// internals
import { MenuButton } from './MenuButton';
import { menuPostData } from './menuPostData';
import { ControlsButtons } from './ControlsButtons';
import { TextContent } from './TextContent';
// import cn from 'classnames';
import { DropDown } from '@shared/DropDown';
import { generateId } from '@utils/react/generateRandomIndex';
import { GenericList } from '@shared/GenericList';
import styles from './card.scss';
import noImg from '../../../../public/images/no_image.jpg';

const menuPostDataWithID = menuPostData.map((item) => ({
  ...generateId(item),
  As: 'button' as 'button',
  className: styles.item,
}));

interface IData {
  data: {
    title: string
    author: string
    created: string
    url: string
    preview: {
      images: [
        {source:
          {url: string}
        }
      ]
    }
    num_comments: number
  }
}
interface ICardProps {
  data: IData
}

export default function Card({data}: ICardProps): React.ReactElement {
  return (
    <li className={styles.card}>
      {console.log('URL: ',data?.data)}
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.previewImg}
            src={data?.data?.preview?.images[0]?.source?.url || noImg}
            alt=''
          />
        </div>
        <TextContent url={data?.data?.url} created={data?.data?.created} author={data?.data?.author} title={data?.data?.title} />
      </div>

      <div className={styles.wrapButtons}>
        <DropDown button={<MenuButton />}>
          <div className={styles['dropdown-content-wrapper']}>
            <GenericList list={menuPostDataWithID} className={styles['list']} />
            <button className={styles.buttonClose}>Закрыть</button>
          </div>
        </DropDown>
        <ControlsButtons countComments={data?.data?.num_comments}/>
      </div>
    </li>
  );
}

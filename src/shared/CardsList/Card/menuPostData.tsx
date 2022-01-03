import React from 'react';
import {
  // HideIcon,
  // ShareIcon,
  // SaveIcon,
  // ComplainIcon,
  // CommentsIcon,
  Icons,
  EComponents,
} from '@shared/Icons';

export interface IMenuPostData {
  Icon: React.ReactElement;
  text: string;
  className?: string;
}

const menuPostData: IMenuPostData[] = [
  {
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
    // Icon: CommentsIcon,
    text: 'Комментарии',
  },
  {
    // Icon: ShareIcon,
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
    text: 'Поделиться',
  },
  {
    // Icon: HideIcon,
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
    text: 'Скрыть',
  },
  {
    // Icon: SaveIcon,
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
    text: 'Сохранить',
  },
  {
    // Icon: ComplainIcon,
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
    text: 'Пожаловаться',
  },
];

export { menuPostData };

import React from "react";
import {HideIcon, ShareIcon, SaveIcon, ComplainIcon, CommentsIcon} from '@Icons'

export interface IMenuPostData {
  Icon: React.ReactNode;
  text: string;
  className?: string;
}

const menuPostData: IMenuPostData[] = [
  {
    Icon: CommentsIcon,
    text: 'Комментарии',
  },
  {
    Icon: ShareIcon,
    text: 'Поделиться',
  },
  {
    Icon: HideIcon,
    text: 'Скрыть',
  },
  {
    Icon: SaveIcon,
    text: 'Сохранить',
  },
  {
    Icon: ComplainIcon,
    text: 'Пожаловаться',
  },
];

export {menuPostData};

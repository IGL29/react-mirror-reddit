import React from 'react';
import {RocketIcon, ArrowIcon, FireIcon, NewIcon, StarIcon} from '@Icons'

export interface IDataCategory {
  text: string;
  Icon: React.ReactNode;
  className?: string;
}

const dataCategory: IDataCategory[] = [
  {
    text: 'Лучшие',
    Icon: RocketIcon,
  },
  {
    text: 'Жаркие',
    Icon: FireIcon,
  },
  {
    text: 'Новые',
    Icon: NewIcon,
  },
  {
    text: 'Топовые',
    Icon: StarIcon,
  },
  {
    text: 'Длительные',
    Icon: ArrowIcon,
  }
];

export {dataCategory};

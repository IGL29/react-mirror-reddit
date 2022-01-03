import React from 'react';
import { Icons, EComponents } from '@Icons';

export interface IDataCategory {
  text: string;
  // Icon: React.FC;
  Icon: React.ReactElement;
  className?: string;
}

const dataCategory: IDataCategory[] = [
  {
    text: 'Лучшие',
    Icon: <Icons name={EComponents['MenuIcon']} size={12} className='dsds' />,
  },
  {
    text: 'Жаркие',
    Icon: <Icons name={EComponents['FireIcon']} size={12} className='dsds' />,
    // Icon: FireIcon,
  },
  {
    text: 'Новые',
    Icon: <Icons name={EComponents['NewIcon']} size={12} className='dsds' />,
    // Icon: NewIcon,
  },
  {
    text: 'Топовые',
    Icon: <Icons name={EComponents['StarIcon']} size={12} className='dsds' />,
    // Icon: StarIcon,
  },
  {
    text: 'Длительные',
    Icon: <Icons name={EComponents['ArrowIcon']} size={12} className='dsds' />,
    // Icon: ArrowIcon,
  },
];

export { dataCategory };

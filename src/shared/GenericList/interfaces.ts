import React from 'react';
import { IIconProps } from '@Icons';
export interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  Icon?: React.FC<IIconProps>;
}

export interface IGenericListProps {
  list: IItem[];
  ContainerAs?: 'ul' | 'div';
  className?: string;
}

import React from 'react';
// Vendor
export { default as MenuIcon } from './MenuIcon';
export { default as CommentsIcon } from './CommentsIcon';
export { default as ComplainIcon } from './ComplainIcon';
export { default as HideIcon } from './HideIcon';
export { default as MessageIcon } from './MessageIcon';
export { default as ShareIcon } from './ShareIcon';
export { default as SearchIcon } from './SearchIcon';
export { default as RocketIcon } from './RocketIcon';
export { default as FireIcon } from './FireIcon';
export { default as NewIcon } from './NewIcon';
export { default as StarIcon } from './StarIcon';
export { default as ArrowIcon } from './ArrowIcon';
export { default as SaveIcon } from './SaveIcon';
// Interface
import { IIconProps } from '.';

interface IIconsProps extends IIconProps {
  name: EComponents;
  size?: number;
}

enum EComponents {
  MenuIcon = 'MenuIcon',
  CommentsIcon = 'CommentsIcon',
  ComplainIcon = 'ComplainIcon',
  HideIcon = 'HideIcon',
  MessageIcon = 'MessageIcon',
  ShareIcon = 'ShareIcon',
  SearchIcon = 'SearchIcon',
  RocketIcon = 'RocketIcon',
  FireIcon = 'FireIcon',
  NewIcon = 'NewIcon',
  StarIcon = 'StarIcon',
  ArrowIcon = 'ArrowIcon',
  SaveIcon = 'SaveIcon',
}

// const Components = {
//   MenuIcon,
//   CommentsIcon,
//   ComplainIcon,
//   HideIcon,
//   MessageIcon,
//   ShareIcon,
//   SearchIcon,
//   RocketIcon,
//   FireIcon,
//   NewIcon,
//   StarIcon,
//   ArrowIcon,
//   SaveIcon,
// };

// type TName =
//   | 'MenuIcon'
//   | 'CommentsIcon'
//   | 'ComplainIcon'
//   | 'HideIcon'
//   | 'MessageIcon'
//   | 'ShareIcon'
//   | 'SearchIcon'
//   | 'RocketIcon'
//   | 'FireIcon'
//   | 'NewIcon'
//   | 'StarIcon'
//   | 'ArrowIcon'
//   | 'SaveIcon';

const Icons = ({ name, size, className }: IIconsProps) => {
  const Component = typeof name === 'string' ? EComponents[name] : name;

  return <Component size={size} className={className} />;
};

export { IIconProps } from './interfaces';
export { Icons, EComponents };

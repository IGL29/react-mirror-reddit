// Internals
import React from 'react';
// Vendor
import { default as MenuIcon } from './MenuIcon';
import { default as CommentsIcon } from './CommentsIcon';
import { default as ComplainIcon } from './ComplainIcon';
import { default as HideIcon } from './HideIcon';
import { default as MessageIcon } from './MessageIcon';
import { default as ShareIcon } from './ShareIcon';
import { default as SearchIcon } from './SearchIcon';
import { default as RocketIcon } from './RocketIcon';
import { default as FireIcon } from './FireIcon';
import { default as NewIcon } from './NewIcon';
import { default as StarIcon } from './StarIcon';
import { default as ArrowIcon } from './ArrowIcon';
import { default as SaveIcon } from './SaveIcon';
import { default as AvatarIcon } from './AvatarIcon';
// Interface
import { ISvgProps } from '@types';

export interface IIconsProps extends ISvgProps {
  name: EComponents;
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
  AvatarIcon = 'AvatarIcon'
}

const Icons: React.FC<IIconsProps> = ({ name, size, className }) => {
  switch (name) {
    case EComponents.MenuIcon:
      return <MenuIcon size={size} className={className} />;
    case EComponents.CommentsIcon:
      return <CommentsIcon size={size} className={className} />;
    case EComponents.ComplainIcon:
      return <ComplainIcon size={size} className={className} />;
    case EComponents.HideIcon:
      return <HideIcon size={size} className={className} />;
    case EComponents.ShareIcon:
      return <ShareIcon size={size} className={className} />;
    case EComponents.MessageIcon:
      return <MessageIcon size={size} className={className} />;
    case EComponents.SearchIcon:
      return <SearchIcon size={size} className={className} />;
    case EComponents.RocketIcon:
      return <RocketIcon size={size} className={className} />;
    case EComponents.FireIcon:
      return <FireIcon size={size} className={className} />;
    case EComponents.NewIcon:
      return <NewIcon size={size} className={className} />;
    case EComponents.StarIcon:
      return <StarIcon size={size} className={className} />;
    case EComponents.ArrowIcon:
      return <ArrowIcon size={size} className={className} />;
    case EComponents.SaveIcon:
      return <SaveIcon size={size} className={className} />;
    case EComponents.AvatarIcon:
      return <AvatarIcon size={size} className={className} />;
    default:
      return <ArrowIcon size={size} className={className} />;
  }
};

export { Icons, EComponents };

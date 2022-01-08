import { IIconsProps, EComponents } from '@shared/Icons';
export interface IMenuPostData {
  icon?: IIconsProps;
  text: string;
}

const menuPostData: IMenuPostData[] = [
  {
    icon: { name: EComponents.CommentsIcon, size: 16 },
    text: 'Комментарии',
  },
  {
    icon: { name: EComponents.ShareIcon, size: 16 },
    text: 'Поделиться',
  },
  {
    icon: { name: EComponents.HideIcon, size: 16 },
    text: 'Скрыть',
  },
  {
    icon: { name: EComponents.SaveIcon, size: 16 },
    text: 'Сохранить',
  },
  {
    icon: { name: EComponents.ComplainIcon, size: 16 },
    text: 'Пожаловаться',
  },
];

export { menuPostData };

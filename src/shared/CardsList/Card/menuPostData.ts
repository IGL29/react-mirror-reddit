export interface IMenuPostData {
  icon: string;
  text: string;
  className?: string;
}

export const menuPostData: IMenuPostData[] = [
  {
    icon: '@img/comments-icon.svg',
    text: 'Комментарии',
  },
  {
    icon: '@img/share-icon.svg',
    text: 'Поделиться',
  },
  {
    icon: '@img/hide-icon.svg',
    text: 'Скрыть',
  },
  {
    icon: '@img/save-icon.svg',
    text: 'Сохранить',
  },
  {
    icon: '@img/complain-icon.svg',
    text: 'Пожаловаться',
  },
];

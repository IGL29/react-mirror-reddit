import { EComponents, IIconsProps } from '@shared/Icons';
export interface IDataCategory {
  text: string;
  icon?: IIconsProps;
}

const dataCategory: IDataCategory[] = [
  {
    text: 'Лучшие',
    icon: { name: EComponents.StarIcon, size: 16 },
  },
  {
    text: 'Жаркие',
    icon: { name: EComponents.FireIcon, size: 16 },
  },
  {
    text: 'Новые',
    icon: { name: EComponents.NewIcon, size: 16 },
  },
  {
    text: 'Топовые',
    icon: { name: EComponents.StarIcon, size: 16 },
  },
  {
    text: 'Длительные',
    icon: { name: EComponents.ArrowIcon, size: 16 },
  },
];

export { dataCategory };

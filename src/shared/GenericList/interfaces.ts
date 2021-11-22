export interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: string;
}

export interface IGenericListProps {
  list: IItem[];
  ContainerAs?: 'ul' | 'div';
  className?: string;
}

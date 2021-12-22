import React from "react";

export interface IItem {
  text: string;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  Icon?: React.FC;
}

export interface IGenericListProps {
  list: IItem[];
  ContainerAs?: 'ul' | 'div';
  className?: string;
}

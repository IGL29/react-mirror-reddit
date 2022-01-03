// Vendor
import React from 'react';
// Internals
import { IGenericListProps, IItem } from './interfaces';

const NOOP = () => {};

const GenericList: React.FC<IGenericListProps> = ({
  list,
  ContainerAs = 'div',
  className,
}: IGenericListProps) => {
  return (
    <ContainerAs className={className}>
      {list.map(
        ({
          As = 'div',
          text,
          onClick = NOOP,
          className,
          id,
          href,
          Icon,
        }: IItem) => (
          <As
            className={className}
            onClick={() => onClick(id)}
            key={id}
            href={href}
          >
            {Icon && <Icon />}
            <p style={{ margin: 0, marginLeft: '5px' }}>{text}</p>
          </As>
        )
      )}
    </ContainerAs>
  );
};

export default GenericList;

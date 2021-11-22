// Vendor
import React from 'react';
// Internals
import {IGenericListProps, IItem} from './interfaces';

const NOOP = () => {
};

export default function GenericList({list, ContainerAs = 'div', className}: IGenericListProps): JSX.Element {
  return (
    <ContainerAs className={className}>
      {list.map(({As = 'div', text, onClick = NOOP, className, id, href, icon}: IItem) => (
        <As
          style={{backgroundImage: icon}}
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </ContainerAs>
  )
}

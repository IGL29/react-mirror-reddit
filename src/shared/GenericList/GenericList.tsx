import React from 'react';
import {IGenericListProps} from './interfaces';

const NOOP = () => {
};

export default function GenericList({list}: IGenericListProps): JSX.Element {
  return (
    <>
      {list.map(({As = 'div', text, onClick = NOOP, className, id, href, icon}) => (
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
    </>
  )
}

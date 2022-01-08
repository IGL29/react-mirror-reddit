// Vendor
import React from 'react';
// Internals
import { ISvgProps } from '@types';

const ArrowIcon: React.FC<ISvgProps> = ({ className, size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.0612 16H4.93878V7.91919H0L8 0L16 7.91919H11.0612V16Z'
      fill='#CC6633'
    />
  </svg>
);

export default ArrowIcon;

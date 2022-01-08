import React from 'react';
import { ISvgProps } from '@types';

const FireIcon: React.FC<ISvgProps> = ({ className, size }): JSX.Element => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 12 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.125 0C7.125 0 7.68 1.98781 7.68 3.60056C7.68 5.1458 6.6675 6.3985 5.1225 6.3985C3.57 6.3985 2.4 5.1458 2.4 3.60056L2.4225 3.33052C0.9075 5.1308 0 7.46367 0 9.99906C0 13.3146 2.685 16 6 16C9.315 16 12 13.3146 12 9.99906C12 5.95593 10.0575 2.34787 7.125 0ZM5.7825 13.7496C4.4475 13.7496 3.3675 12.6995 3.3675 11.3943C3.3675 10.1791 4.155 9.32396 5.475 9.05391C6.8025 8.78387 8.175 8.14627 8.94 7.11861C9.2325 8.08626 9.3825 9.10642 9.3825 10.1491C9.3825 12.1369 7.77 13.7496 5.7825 13.7496Z'
      fill='#CC6633'
    />
  </svg>
);

export default FireIcon;

import React from 'react';
import { ISvgProps } from '@types';

const NewIcon: React.FC<ISvgProps> = ({ className, size }): JSX.Element => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.0272 1.92795C12.0776 1.76064 13.0706 2.49283 13.2345 3.54374C13.3301 4.15647 13.7162 4.69603 14.2672 4.98069C15.2209 5.47345 15.6022 6.65427 15.1228 7.61475C14.8452 8.17096 14.8443 8.83295 15.1232 9.38853C15.6074 10.3533 15.2182 11.5359 14.2574 12.0281C13.704 12.3116 13.3155 12.8493 13.2197 13.4637C13.0552 14.5182 12.0586 15.2466 11.0045 15.0791C10.3966 14.9825 9.77658 15.1841 9.34339 15.6214C8.59246 16.3794 7.35809 16.3677 6.61126 15.6056C6.17743 15.1629 5.55035 14.9559 4.93908 15.0586C3.89901 15.2333 2.91632 14.5256 2.75243 13.4838L2.74351 13.4271C2.647 12.8136 2.26404 12.2827 1.71231 11.9976C0.763394 11.5073 0.385495 10.3448 0.864672 9.39021L0.878179 9.36331C1.15676 8.80833 1.15637 8.15428 0.877127 7.59963C0.394701 6.64141 0.770745 5.47338 1.7216 4.9766L1.75242 4.9605C2.29325 4.67794 2.66949 4.14713 2.76425 3.54433C2.92835 2.50046 3.91539 1.77407 4.95755 1.94869C5.57108 2.05149 6.19969 1.84368 6.6343 1.3986C7.38056 0.634364 8.61571 0.623816 9.36606 1.38403C9.79886 1.82253 10.4188 2.02487 11.0272 1.92795Z'
      fill='#CC6633'
    />
  </svg>
);

export default NewIcon;

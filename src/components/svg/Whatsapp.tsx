import React, { ComponentProps } from 'react';

const Whatsapp: React.FC<WhatsappProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 512 512" {...rest}>
      <path d="M256 .000002C114.63672.000002.000002 114.63672.000002 256S114.63672 512 256 512s256-114.63672 256-256S397.36328.000002 256 .000002zm5.42577 405.050768c-.004 0 .004 0 0 0h-.0625c-25.64453-.012-50.84375-6.44141-73.22266-18.64453l-81.22265 21.30079 21.73828-79.375c-13.41019-23.22656-20.46487-49.57812-20.45316-76.57422.0352-84.45312 68.76954-153.160146 153.22265-153.160146 40.98439.0156 79.45704 15.968746 108.38282 44.917956 28.92969 28.95312 44.85157 67.43751 44.83593 108.36329-.0352 84.45702-68.77733 153.17186-153.21875 153.17186zm0 0" />
      <path d="M261.47656 124.46876c-70.2461 0-127.37501 57.10546-127.40626 127.30077-.008 24.05468 6.72656 47.48047 19.47267 67.75l3.02733 4.8164-12.86719 46.98048 48.19923-12.64064 4.65235 2.75782c19.55077 11.60157 41.96484 17.73828 64.8164 17.7461h.0508c70.1914 0 127.32031-57.10938 127.35156-127.3086.012-34.01953-13.22265-66.00391-37.26562-90.0664-24.04298-24.06251-56.01954-37.32421-90.03126-37.33593zm74.90625 182.03515c-3.1914 8.9375-18.48437 17.09765-25.83984 18.19921-6.59766.98437-14.94141 1.39453-24.11328-1.51563-5.5625-1.76562-12.69141-4.12108-21.82813-8.06249-38.40234-16.57813-63.48438-55.23439-65.39843-57.78907-1.91407-2.55468-15.63283-20.7539-15.63283-39.59375 0-18.83593 9.89064-28.09765 13.39844-31.92577 3.51172-3.83204 7.66016-4.78907 10.21095-4.78907 2.55077 0 5.10547.0233 7.33593.1328 2.35156.1172 5.50782-.89453 8.61328 6.57031 3.1914 7.66407 10.84766 26.5 11.80469 28.41407.95704 1.91797 1.59376 4.15233.32032 6.70702-1.27735 2.5547-5.51953 8.06642-9.57033 13.08986-1.6992 2.10545-3.91405 3.98045-1.67968 7.81249 2.23048 3.82812 9.91798 16.36328 21.29689 26.51171 14.62498 13.03908 26.96093 17.07813 30.78905 18.99611 3.82421 1.91405 6.0586 1.59374 8.29297-.95703 2.23047-2.55469 9.57032-11.17579 12.1211-15.00783 2.55078-3.83202 5.10546-3.1914 8.61328-1.91405 3.51172 1.27344 22.33202 10.53516 26.16014 12.44921 3.82814 1.91798 6.37892 2.875 7.33595 4.47267.96093 1.59764.96093 9.2578-2.23047 18.19921zm0 0" />
    </svg>
  );
};

Whatsapp.displayName = 'Whatsapp';

export type WhatsappProps = ComponentProps<'svg'>;
export default Whatsapp;

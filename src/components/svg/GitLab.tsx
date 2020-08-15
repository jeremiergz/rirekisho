import React, { ComponentProps } from 'react';

const LinkedIn: React.FC<LinkedInProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 512 512" {...rest}>
      <path d="M256 0A256 256 0 000 256a256 256 0 00256 256 256 256 0 00256-256A256 256 0 00256 0zm109.32422 94.802734c2.76229-.113738 5.58539 1.416019 6.61914 4.597657l38.81641 119.460939 19.58593 60.27344-.00195.00195a13.323818 13.323818 0 01-4.8457 14.91797L255.99414 417.20312 86.488281 294.04883c-.946726-.68776-1.754552-1.51184-2.478515-2.39453a13.309895 13.309895 0 01-2.365235-12.51953l11.382813-35.01758 8.203126-25.25 38.81445-119.455081a6.5045845 6.5045845 0 011.54883-2.490234c2.49213-2.639698 6.74639-2.677427 9.35547-.199219.2506.23947.53476.489708.75195.779297a7.6517972 7.6517972 0 011.03711 2.136719l13.09375 40.548828 25.71875 79.60938h128.88867l38.81836-119.927739c.49565-1.51754 1.39792-3.12406 2.51172-3.892579 1.05637-.73093 2.2991-1.122128 3.55469-1.173828z" />
    </svg>
  );
};

LinkedIn.displayName = 'LinkedIn';

export type LinkedInProps = ComponentProps<'svg'>;
export default LinkedIn;

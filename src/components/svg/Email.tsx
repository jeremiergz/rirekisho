import React, { ComponentProps } from 'react';

const Email: React.FC<EmailProps> = ({ fill, ...rest }) => {
  return (
    <svg fill={fill} viewBox="0 0 512 512" {...rest}>
      <path d="M257 210c-24.814 0-45 20.186-45 45s20.186 45 45 45 45-20.186 45-45-20.186-45-45-45z" />
      <path d="M255 0C114.39 0 0 114.39 0 255s114.39 257 255 257 257-116.39 257-257S395.61 0 255 0zm107 330c-20.273 0-38.152-10.161-49.017-25.596C299.23 319.971 279.354 330 257 330c-41.353 0-75-33.647-75-75s33.647-75 75-75c16.948 0 32.426 5.865 45 15.383V195c0-8.291 6.709-15 15-15s15 6.709 15 15v75c0 16.538 13.462 30 30 30s30-13.462 30-30c0-100.391-66.432-150-135-150-74.443 0-135 60.557-135 135s60.557 135 135 135c30 0 58.374-9.609 82.061-27.803 15.822-12.078 33.94 11.765 18.281 23.789C328.353 408.237 293.665 420 257 420c-90.981 0-165-74.019-165-165S166.019 90 257 90c82.897 0 165 61.135 165 180 0 33.091-26.909 60-60 60z" />
    </svg>
  );
};

Email.displayName = 'Email';

export type EmailProps = ComponentProps<'svg'>;
export default Email;

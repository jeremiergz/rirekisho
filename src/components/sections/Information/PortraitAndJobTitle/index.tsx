import Anchor from '@/components/common/Anchor';
import Conditional from '@/components/common/Conditional';
import useCertificationsData from '@/components/hooks/data/useCertificationsData';
import clsx from 'clsx';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function PortraitAndJobTitle({ jobTitle }: PortraitAndJobTitleProps): JSX.Element {
  const certifications = useCertificationsData();

  const mainCertification = certifications.find(c => c.sortOrder === 0) || certifications[0];
  const image = getImage(mainCertification.img.src);

  return (
    <div className="-mt-10 flex flex-1 flex-col items-center justify-between md:order-2">
      <div
        className={clsx(
          'bg-white dark:bg-gray-900',
          'relative h-48 w-48 rounded-full transition-colors will-change-auto lg:h-56 lg:w-56',
        )}
      >
        <div className="absolute left-0 right-0 top-4 m-auto h-40 w-40 lg:h-48 lg:w-48">
          <StaticImage
            alt="portrait"
            height={192}
            loading="eager"
            placeholder="blurred"
            quality={100}
            src="../../../../../content/assets/portrait.png"
          />
        </div>
        <div className="absolute bottom-0 right-0 h-16 w-16 lg:-bottom-2 lg:-right-1.5 lg:h-20 lg:w-20">
          <Conditional
            condition={!!mainCertification.website}
            wrapper={children => (
              <Anchor aria-label={`Go to ${mainCertification.website}`} external href={mainCertification.website}>
                {children}
              </Anchor>
            )}
          >
            <GatsbyImage
              alt={`${mainCertification.provider} - ${mainCertification.name}`}
              image={image}
              loading="eager"
            />
          </Conditional>
        </div>
      </div>
      <span className="my-4 text-center text-4xl font-extrabold text-secondary dark:text-secondary-dark md:-mx-8">
        {jobTitle}
      </span>
    </div>
  );
}

export type PortraitAndJobTitleProps = {
  jobTitle: string;
};
export default PortraitAndJobTitle;

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
    <div className="flex flex-1 flex-col items-center justify-between -mt-10 md:order-2">
      <div
        className={clsx(
          'bg-white dark:bg-gray-900',
          'h-48 lg:h-56 relative rounded-full transition-colors w-48 lg:w-56 will-change-auto',
        )}
      >
        <div className="absolute h-40 lg:h-48 left-0 m-auto right-0 top-4 w-40 lg:w-48">
          <StaticImage
            alt="portrait"
            height={192}
            loading="eager"
            placeholder="blurred"
            quality={100}
            src="../../../../../content/assets/portrait.png"
          />
        </div>
        <div className="absolute bottom-0 lg:-bottom-2 h-16 lg:h-20 right-0 lg:-right-1.5 w-16 lg:w-20">
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
      <span className="font-extrabold my-4 md:-mx-8 text-4xl text-center text-secondary dark:text-secondary-dark">
        {jobTitle}
      </span>
    </div>
  );
}

export type PortraitAndJobTitleProps = {
  jobTitle: string;
};
export default PortraitAndJobTitle;

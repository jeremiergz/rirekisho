import Anchor from '@/common/components/misc/Anchor';
import Conditional from '@/common/components/misc/Conditional';
import clsx from 'clsx';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import useCertificationsData from '../../../../hooks/useCertificationsData';
import Certification from '../../../../models/Certification';

function renderCertification(cert: Certification): JSX.Element | null {
  if (cert.display) {
    const image = getImage(cert.img.src);

    return (
      <div className="absolute bottom-0 right-0 h-16 w-16 lg:-bottom-2 lg:-right-1.5 lg:h-20 lg:w-20">
        <Conditional
          condition={!!cert.website}
          wrapper={children => (
            <Anchor aria-label={`Go to ${cert.website}`} external href={cert.website}>
              {children}
            </Anchor>
          )}
        >
          <GatsbyImage alt={`${cert.provider} - ${cert.name}`} image={image} loading="eager" />
        </Conditional>
      </div>
    );
  } else {
    return null;
  }
}

function CertificationStamp({ className, ...rest }: CertificationStampProps): JSX.Element {
  const certifications = useCertificationsData();

  const mainCertification = certifications.find(c => c.sortOrder === 0) || certifications[0];

  return (
    <div
      className={clsx(
        'bg-white dark:bg-gray-900',
        'relative h-48 w-48 rounded-full transition-colors will-change-auto lg:h-56 lg:w-56',
        className,
      )}
      {...rest}
    >
      <div className="absolute left-0 right-0 top-4 m-auto h-40 w-40 lg:h-48 lg:w-48">
        <StaticImage
          alt="portrait"
          height={192}
          loading="eager"
          placeholder="blurred"
          quality={100}
          src="../../../../../../../content/assets/portrait.png"
        />
      </div>
      {renderCertification(mainCertification)}
    </div>
  );
}

export type CertificationStampProps = React.ComponentProps<'div'>;
export default CertificationStamp;

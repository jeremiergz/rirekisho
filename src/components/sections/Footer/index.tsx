import Anchor from '@/components/common/Anchor';
import useFooterData from '@/components/hooks/data/useFooterData';
import useStripes from '@/components/hooks/useStripes';
import { useTheme } from '@/components/providers/ThemeProvider';
import HeartIcon from '@/components/svgs/icons/Heart';
import clsx from 'clsx';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

function Footer(): JSX.Element {
  const {
    site: {
      siteMetadata: { name, repositoryURL, version },
    },
  } = useFooterData();
  const { height, stripes } = useStripes(126, 'DESC', 1.25);
  const { type } = useTheme();

  const appDetails = `${name.toLowerCase()} v${version}`;
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;

  return (
    <footer
      className={clsx('flex flex-col items-center justify-center mt-4 relative text-white', 'print:hidden')}
      style={{ contentVisibility: 'auto', height }}
    >
      <div className="absolute w-full -z-10">
        {stripes.map(stripe => (
          <div
            className="transition-colors w-full will-change-auto"
            key={stripe.color}
            style={{ background: stripe.color, height: stripe.height }}
          />
        ))}
      </div>
      <div className="flex xs:flex-col md:flex-row items-center justify-center xs:mb-4 md:mb-4">
        <div className="flex items-center xs:mb-2 md:mb-0 xs:mx-0 md:mx-4">
          <span className="font-semibold mr-1 text-sm text-white dark:text-primary">Made with</span>
          <HeartIcon height={14} width={14} />
          <span className="font-semibold ml-1 text-sm text-white dark:text-primary">using</span>
        </div>
        <div>
          <Anchor className="mr-2" external href="https://gatsbyjs.com">
            <StaticImage
              alt="Go to gatsbyjs.com"
              height={56}
              placeholder="blurred"
              quality={100}
              src="../../../../content/assets/tech_gatsby.png"
              style={{ display: type === 'light' ? 'inline-block' : 'none' }}
            />
            <StaticImage
              alt="Go to gatsbyjs.com"
              height={56}
              placeholder="blurred"
              quality={100}
              src="../../../../content/assets/tech_gatsby_dark.png"
              style={{ display: type === 'light' ? 'none' : 'inline-block' }}
            />
          </Anchor>
          <Anchor className="ml-2" external href="https://tailwindcss.com">
            <StaticImage
              alt="Go to tailwindcss.com"
              className="inline-block dark:hidden"
              height={56}
              placeholder="blurred"
              quality={100}
              src="../../../../content/assets/tech_tailwindcss.png"
              style={{ display: type === 'light' ? 'inline-block' : 'none' }}
            />
            <StaticImage
              alt="Go to tailwindcss.com"
              height={56}
              placeholder="blurred"
              quality={100}
              src="../../../../content/assets/tech_tailwindcss_dark.png"
              style={{ display: type === 'light' ? 'none' : 'inline-block' }}
            />
          </Anchor>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold text-xs text-gray-300 dark:text-primary">{appDetails}</span>
        <Anchor className="leading-3" external href={sourceCodeURL}>
          <span className="border-b border-dotted border-gray-400 dark:border-gray-800 text-2xs text-gray-400 dark:text-gray-800">
            source code
          </span>
        </Anchor>
      </div>
    </footer>
  );
}

export default Footer;

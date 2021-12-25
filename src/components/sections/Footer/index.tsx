import Anchor from '@/components/common/Anchor';
import useFooterData from '@/components/hooks/data/useFooterData';
import { useTheme } from '@/components/providers/ThemeProvider';
import HeartIcon from '@/components/svgs/icons/Heart';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

function Footer(): JSX.Element {
  const {
    gatsbyjs,
    gatsbyjsDark,
    siteMetadata: { name, repositoryURL, version },
    tailwindcss,
    tailwindcssDark,
  } = useFooterData();
  const { mode } = useTheme();

  const appDetails = `${name.toLowerCase()} v${version}`;
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;

  return (
    <footer
      className={clsx(
        'flex flex-col h-40 md:h-32 items-center justify-center mt-4 relative text-white',
        'bg-gradient-to-b from-secondary to-primary dark:from-secondary-dark dark:via-primary-dark dark:to-primary',
        'print:hidden',
      )}
    >
      <div className="flex xs:flex-col md:flex-row items-center justify-center xs:mb-4 md:mb-4">
        <div className="flex items-center xs:mb-2 md:mb-0 xs:mx-0 md:mx-4">
          <span className="font-semibold mr-1 text-sm text-white dark:text-primary">Made with</span>
          <HeartIcon height={14} width={14} />
          <span className="font-semibold ml-1 text-sm text-white dark:text-primary">using</span>
        </div>
        <div>
          <Anchor className="mr-2" external href="https://gatsbyjs.com">
            <GatsbyImage
              alt="Go to gatsbyjs.com"
              className="h-14 w-14"
              image={getImage(mode === 'light' ? gatsbyjs.childImageSharp : gatsbyjsDark.childImageSharp)}
            />
          </Anchor>
          <Anchor className="ml-2" external href="https://tailwindcss.com">
            <GatsbyImage
              alt="Go to tailwindcss.com"
              className="h-14 w-14"
              image={getImage(mode === 'light' ? tailwindcss.childImageSharp : tailwindcssDark.childImageSharp)}
            />
          </Anchor>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold text-xs text-gray-300 dark:text-gray-300">{appDetails}</span>
        <Anchor className="leading-3" external href={sourceCodeURL}>
          <span className="border-b border-dotted border-gray-400 text-2xs text-gray-400">source code</span>
        </Anchor>
      </div>
    </footer>
  );
}

export default Footer;

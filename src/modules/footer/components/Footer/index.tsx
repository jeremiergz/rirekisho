import Anchor from '@/common/components/misc/Anchor';
import { useTheme } from '@/common/components/providers/ThemeProvider';
import HeartIcon from '@/common/components/svgs/icons/Heart';
import useSiteMetadata from '@/common/hooks/useSiteMetadata';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import useFooterData from '../../hooks/useFooterData';

function Footer(): JSX.Element {
  const { gatsbyjs, gatsbyjsDark, tailwindcss, tailwindcssDark } = useFooterData();
  const { name, repositoryURL, version } = useSiteMetadata();
  const { mode } = useTheme();

  const appDetails = `${name.toLowerCase()} v${version}`;
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;

  return (
    <footer
      className={clsx(
        'relative mt-4 flex h-40 flex-col items-center justify-center text-gray-100 md:h-32',
        'bg-gradient-to-b from-secondary to-primary dark:from-secondary-dark dark:via-primary-dark dark:to-primary',
        'print:hidden',
      )}
    >
      <div className="flex items-center justify-center xs:mb-4 xs:flex-col md:mb-4 md:flex-row">
        <div className="flex items-center xs:mx-0 xs:mb-2 md:mx-4 md:mb-0">
          <span className="mr-1 text-sm font-semibold text-gray-100 dark:text-slate-800">Made with</span>
          <HeartIcon height={14} width={14} />
          <span className="ml-1 text-sm font-semibold text-gray-100 dark:text-slate-800">using</span>
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
        <span className="text-xs font-semibold text-gray-200 dark:text-slate-900">{appDetails}</span>
        <Anchor className="leading-3" external href={sourceCodeURL}>
          <span className="border-b border-dotted border-gray-400 text-2xs text-gray-400 dark:border-[#16213d] dark:text-[#16213d]">
            source code
          </span>
        </Anchor>
      </div>
    </footer>
  );
}

export default Footer;

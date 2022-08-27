import Anchor from '@/common/components/misc/Anchor';
import HeartIcon from '@/common/components/svgs/icons/Heart';
import useSiteMetadata from '@/common/hooks/useSiteMetadata';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useFooterData from '../../hooks/useFooterData';

function Footer(): JSX.Element {
  const { gatsbyjs, tailwindcss } = useFooterData();
  const { name, repositoryURL, version } = useSiteMetadata();

  const appDetails = `${name.toLowerCase()} v${version}`;
  const sourceCodeURL = `${repositoryURL}/tree/${version}`;

  return (
    <footer
      className={clsx(
        'relative mt-4 flex h-40 flex-col items-center justify-center bg-primary text-gray-100 md:h-32',
        'print:hidden',
      )}
    >
      <div className="flex items-center justify-center xs:mb-4 xs:flex-col md:mb-4 md:flex-row">
        <div className="flex items-center xs:mx-0 xs:mb-2 md:mx-4 md:mb-0">
          <span className="mr-1 text-sm font-semibold text-gray-300">Made with</span>
          <HeartIcon height={14} width={14} />
          <span className="ml-1 text-sm font-semibold text-gray-300">using</span>
        </div>
        <div>
          <Anchor className="mr-2" external href="https://gatsbyjs.com">
            <GatsbyImage alt="Go to gatsbyjs.com" className="h-14 w-14" image={getImage(gatsbyjs.childImageSharp)} />
          </Anchor>
          <Anchor className="ml-2" external href="https://tailwindcss.com">
            <GatsbyImage
              alt="Go to tailwindcss.com"
              className="h-14 w-14"
              image={getImage(tailwindcss.childImageSharp)}
            />
          </Anchor>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs font-semibold text-slate-900">{appDetails}</span>
        <Anchor className="leading-3" external href={sourceCodeURL}>
          <span className="border-b border-dotted border-gray-900 text-2xs text-gray-900">source code</span>
        </Anchor>
      </div>
    </footer>
  );
}

export default Footer;

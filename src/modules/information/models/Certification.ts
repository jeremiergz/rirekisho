import { IGatsbyImageData } from 'gatsby-plugin-image';

type CertificationProps = {
  display: boolean;
  img: {
    src: IGatsbyImageData;
  };
  name: string;
  provider: string;
  sortOrder: number;
  website: string | null;
};

interface Certification extends CertificationProps {}

class Certification {
  constructor({ display, img, name, provider, sortOrder, website }: CertificationProps) {
    this.display = display;
    this.img = img;
    this.name = name;
    this.provider = provider;
    this.sortOrder = sortOrder;
    this.website = website;
  }
}

export default Certification;

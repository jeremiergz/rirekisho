import { IGatsbyImageData } from 'gatsby-plugin-image';

type CertificationProps = {
  img: { src: IGatsbyImageData };
  name: string;
  provider: string;
  sortOrder: number;
  website: string;
};

interface Certification extends CertificationProps {}

class Certification {
  constructor({ img, name, provider, sortOrder, website }: CertificationProps) {
    this.img = img;
    this.name = name;
    this.provider = provider;
    this.sortOrder = sortOrder;
    this.website = website;
  }
}

export default Certification;

import { IGatsbyImageData } from 'gatsby-plugin-image';

type LanguageProps = {
  img: {
    src: IGatsbyImageData;
  };
  name: string;
  proficiencyLevel: number;
  sortOrder: number;
};

interface Language extends LanguageProps {}

class Language {
  constructor({ img, name, proficiencyLevel, sortOrder }: LanguageProps) {
    this.img = img;
    this.name = name;
    this.proficiencyLevel = proficiencyLevel;
    this.sortOrder = sortOrder;
  }
}

export default Language;

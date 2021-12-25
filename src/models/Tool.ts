import { IGatsbyImageData } from 'gatsby-plugin-image';

type ToolProps = {
  img?: { src: IGatsbyImageData };
  link?: string;
  name: string;
  sortOrder: number;
};

interface Tool extends ToolProps {}

class Tool {
  constructor({ img, link, name, sortOrder }: ToolProps) {
    this.img = img;
    this.link = link;
    this.name = name;
    this.sortOrder = sortOrder;
  }
}

export default Tool;

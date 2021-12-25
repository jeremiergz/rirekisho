type InterestProps = {
  name: string;
  sortOrder: number;
};

interface Interest extends InterestProps {}

class Interest {
  constructor({ name, sortOrder }: InterestProps) {
    this.name = name;
    this.sortOrder = sortOrder;
  }
}

export default Interest;

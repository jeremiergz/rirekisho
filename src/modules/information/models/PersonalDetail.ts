type PersonalDetailProps = {
  label: string;
  sortOrder: number;
  value: string;
};

interface PersonalDetail extends PersonalDetailProps {}

class PersonalDetail {
  constructor({ label, sortOrder, value }: PersonalDetailProps) {
    this.label = label;
    this.sortOrder = sortOrder;
    this.value = value;
  }
}

export default PersonalDetail;

type ContactDetailProps = {
  label: string;
  link: string;
  sortOrder: number;
  type: 'email' | 'github' | 'gitlab' | 'linkedin' | 'twitter';
};

interface ContactDetail extends ContactDetailProps {}

class ContactDetail {
  constructor({ label, link, sortOrder, type }: ContactDetailProps) {
    this.label = label;
    this.link = link;
    this.sortOrder = sortOrder;
    this.type = type;
  }
}

export default ContactDetail;

import ContactDetail from './ContactDetail';
import PersonalDetail from './PersonalDetail';

type InformationProps = {
  contacts: ContactDetail[];
  fullName: string;
  jobTitle: string;
  personalDetails: PersonalDetail[];
  twitterUsername: string;
};

interface Information extends InformationProps {}

class Information {
  constructor({ contacts, fullName, jobTitle, personalDetails, twitterUsername }: InformationProps) {
    this.contacts = contacts;
    this.fullName = fullName;
    this.jobTitle = jobTitle;
    this.personalDetails = personalDetails;
    this.twitterUsername = twitterUsername;
  }
}

export default Information;

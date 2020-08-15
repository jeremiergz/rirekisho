declare module Models {
  type Section = {
    Component?: React.ForwardRefExoticComponent;
    Icon: React.ComponentType;
    ref: React.RefObject<HTMLElement> | 'top' | 'bottom';
    title: string;
  };

  type Degree = {
    city: string;
    countryCode: string;
    issueDate: string;
    name: string;
    school: string;
  };

  type Experience = {
    company: string;
    companySector: string;
    endDate: string;
    img: string;
    projects: Project[];
    startDate: string;
  };

  type LabeledItem = {
    img: string;
    link?: string;
    name: string;
    sortOrder: number;
  };

  type Language = {
    img: string;
    name: string;
    proficiencyLevel: number;
    sortOrder: number;
  };

  type PersonalContact = {
    label: string;
    link: string;
    sortOrder: number;
    type:
      | 'email'
      | 'facebook'
      | 'github'
      | 'gitlab'
      | 'instagram'
      | 'linkedin'
      | 'messenger'
      | 'phone'
      | 'reddit'
      | 'skype'
      | 'twitter'
      | 'whatsapp';
  };

  type PersonalDetails = {
    contactFormRecipient: string;
    contactFormSender: string;
    contacts: PersonalContact[];
    jobTitle: string;
    location: Location;
    personalInformation: PersonalInformation[];
    personalPicture: string;
  };

  type PersonalInformation = {
    label: string;
    sortOrder: number;
    value: string;
  };

  type Project = {
    client: string;
    clientSector: string;
    description: string;
    name: string;
    tasks: string[];
    technologies: string[];
  };

  type Skill = {
    name: string;
    proficiencyLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    section: string;
    sortOrder: number;
  };

  type SkillSection = {
    items: Skill[];
    name: string;
    sortOrder: number;
  };
}

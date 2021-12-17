declare module Models {
  type Certification = {
    img: Image;
    name: string;
    provider: string;
    sortOrder: number;
    website: string;
  };

  type ChildImage = {
    childImageSharp: import('gatsby-plugin-image').IGatsbyImageData;
  };

  type Degree = {
    city: string;
    countryCode: string;
    issueDate: string;
    name: string;
    school: string;
  };

  type Experience = {
    company: {
      img: Image;
      name: string;
      sector: string;
      website: string;
    };
    projects: Project[];
    timeline: {
      endDate: string;
      startDate: string;
    };
  };

  type Image = {
    src: import('gatsby-plugin-image').IGatsbyImageData;
  };

  type Interest = Omit<LabeledItem, 'img' | 'link'>;

  type LabeledItem = {
    img?: Image;
    link?: string;
    name: string;
    sortOrder: number;
  };

  type Language = {
    img: Image;
    name: string;
    proficiencyLevel: number;
    sortOrder: number;
  };

  type PersonalContact = {
    label: string;
    link: string;
    sortOrder: number;
    type: 'email' | 'github' | 'gitlab' | 'linkedin' | 'twitter';
  };

  type PersonalDetails = {
    contacts: PersonalContact[];
    fullName: string;
    jobTitle: string;
    personalInformation: PersonalInformation[];
    twitterUsername: string;
  };

  type PersonalInformation = {
    label: string;
    sortOrder: number;
    value: string;
  };

  type Project = {
    client: {
      name: string;
      sector: string;
    };
    description: string;
    name: string;
    tasks: string[];
    technologies: string[];
  };

  type Section = {
    Component?: React.ForwardRefExoticComponent;
    Icon: React.FC<import('@/components/common/SVG').SVGProps>;
    ref: React.RefObject<HTMLElement> | 'top' | 'bottom';
    title: string;
  };

  type Skill = {
    items: SkillItem[];
    name: string;
    sortOrder: number;
  };

  type SkillItem = {
    name: string;
    proficiencyLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    sortOrder: number;
  };

  type Tool = LabeledItem;
}

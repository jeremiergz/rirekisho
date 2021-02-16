import { SVGProps } from '@common/SVG';

export declare global {
  declare module Models {
    type Degree = {
      city: string;
      countryCode: string;
      issueDate: string;
      name: string;
      school: string;
    };

    type Experience = {
      company: {
        img: string;
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

    type Interest = Omit<LabeledItem, 'img' | 'link'>;

    type LabeledItem = {
      img?: string;
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
      Icon: React.FC<SVGProps>;
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
      section: string;
      sortOrder: number;
    };

    type Tool = LabeledItem;
  }
}

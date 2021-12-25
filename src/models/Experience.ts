import { IGatsbyImageData } from 'gatsby-plugin-image';
import Project from './Project';

type ExperienceProps = {
  company: {
    img: { src: IGatsbyImageData };
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

interface Experience extends ExperienceProps {}

class Experience {
  constructor({ company, projects, timeline }: ExperienceProps) {
    this.company = company;
    this.projects = projects;
    this.timeline = timeline;
  }
}

export default Experience;

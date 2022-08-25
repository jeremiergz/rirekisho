type Company = {
  name: string;
  sector: string;
  website: string;
};

type ProjectProps = {
  client: Company | null;
  description: string;
  employer: Company | null;
  name: string | null;
  sortOrder: number;
  tasks: string[];
  technologies: string[];
};

interface Project extends ProjectProps {}

class Project {
  constructor({ client, description, employer, name, sortOrder, tasks, technologies }: ProjectProps) {
    this.client = client;
    this.description = description;
    this.employer = employer;
    this.name = name;
    this.sortOrder = sortOrder;
    this.tasks = tasks;
    this.technologies = technologies;
  }
}

export default Project;

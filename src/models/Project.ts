type ProjectProps = {
  client: {
    name: string;
    sector: string;
  };
  description: string;
  name: string;
  sortOrder: number;
  tasks: string[];
  technologies: string[];
};

interface Project extends ProjectProps {}

class Project {
  constructor({ client, description, name, sortOrder, tasks, technologies }: ProjectProps) {
    this.client = client;
    this.description = description;
    this.name = name;
    this.sortOrder = sortOrder;
    this.tasks = tasks;
    this.technologies = technologies;
  }
}

export default Project;

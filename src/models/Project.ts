type ProjectProps = {
  client: {
    name: string;
    sector: string;
  };
  description: string;
  name: string;
  tasks: string[];
  technologies: string[];
};

interface Project extends ProjectProps {}

class Project {
  constructor({ client, description, name, tasks, technologies }: ProjectProps) {
    this.client = client;
    this.description = description;
    this.name = name;
    this.tasks = tasks;
    this.technologies = technologies;
  }
}

export default Project;

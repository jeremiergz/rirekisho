type SkillProps = {
  items: {
    name: string;
    proficiencyLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    sortOrder: number;
  }[];
  name: string;
  sortOrder: number;
};

interface Skill extends SkillProps {}

class Skill {
  constructor({ items, name, sortOrder }: SkillProps) {
    this.items = items;
    this.name = name;
    this.sortOrder = sortOrder;
  }
}

export default Skill;

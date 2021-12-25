type DegreeProps = {
  city: string;
  countryCode: string;
  issueDate: string;
  name: string;
  school: string;
};

interface Degree extends DegreeProps {}

class Degree {
  constructor({ city, countryCode, issueDate, name, school }: DegreeProps) {
    this.city = city;
    this.countryCode = countryCode;
    this.issueDate = issueDate;
    this.name = name;
    this.school = school;
  }
}

export default Degree;

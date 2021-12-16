import Gatsby from 'gatsby';

module.exports = {
  ...Gatsby,
  graphql: jest.fn(),
  navigate: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};

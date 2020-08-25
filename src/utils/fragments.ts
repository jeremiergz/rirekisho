import { graphql } from 'gatsby';

export const query = graphql`
  fragment ThemeColors on ThemeColors {
    background
    body1
    body2
    caption
    dark
    error
    info
    primary
    secondary
    subtitle
    success
    text
    white
  }
`;

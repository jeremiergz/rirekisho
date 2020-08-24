import { graphql } from 'gatsby';

export const query = graphql`
  fragment Theme on Theme {
    colors {
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
    fontWeights {
      bold
      bolder
      regular
    }
    fonts {
      main
      title
    }
  }
`;

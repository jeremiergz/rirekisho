declare module GraphQL {
  type DetailsData = {
    details: Models.PersonalDetails;
  };

  type EducationData = {
    degreeNodes: {
      nodes: Models.Degree[];
    };
  };

  type ExperienceData = {
    companyImgNodes: {
      nodes: {
        fixed: import('gatsby-image').FixedObject & {
          originalName: string;
        };
      }[];
    };
    experienceNodes: {
      nodes: Models.Experience[];
    };
  };

  type FooterData = {
    gatsbyImg: {
      fluid: import('gatsby-image').FluidObject;
    };
    site: {
      siteMetadata: {
        appName: string;
        repository: {
          url: string;
        };
        version: string;
      };
    };
    styledComponentsImg: {
      fluid: import('gatsby-image').FluidObject;
    };
  };

  type HeaderData = {
    flagImgNodes: {
      nodes: {
        fluid: import('gatsby-image').FluidObject & {
          originalName: string;
        };
      }[];
    };
    languageNodes: {
      nodes: Models.Language[];
    };
  };

  type InterestsData = {
    interestNodes: {
      nodes: Models.LabeledItem[];
    };
  };

  type LabeledIconsBlockData = {
    imgNodes: {
      nodes: {
        fixed: import('gatsby-image').FixedObject & {
          originalName: string;
        };
      }[];
    };
  };

  type PortraitData = {
    imageSharp: {
      fluid: import('gatsby-image').FluidObject;
    };
  };

  type SEOData = {
    banner: {
      childImageSharp: {
        fixed: {
          src: string;
        };
      };
    };
    site: {
      siteMetadata: {
        description: string;
        keywords: string[];
        siteUrl: string;
        title: string;
        twitterUsername: string;
      };
    };
  };

  type SkillsData = {
    skillNodes: {
      nodes: Models.SkillSection[];
    };
  };

  type ToolboxData = {
    toolNodes: {
      nodes: Models.LabeledItem[];
    };
  };
}

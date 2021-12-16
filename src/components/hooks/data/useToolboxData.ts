import { graphql, useStaticQuery } from 'gatsby';

type ToolboxQueryData = {
  toolbox: {
    nodes: Models.Tool[];
  };
};

function useToolboxData(): ToolboxQueryData {
  return useStaticQuery<ToolboxQueryData>(graphql`
    query ToolboxQuery {
      toolbox: allToolboxJson(sort: { fields: sortOrder, order: ASC }) {
        nodes {
          img {
            src {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100, width: 48)
              }
            }
          }
          link
          name
          sortOrder
        }
      }
    }
  `);
}

export type { ToolboxQueryData };
export default useToolboxData;

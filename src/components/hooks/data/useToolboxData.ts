import Tool from '@/models/Tool';
import { graphql, useStaticQuery } from 'gatsby';

type ToolboxQueryData = {
  toolbox: {
    nodes: Tool[];
  };
};

function useToolboxData(): Tool[] {
  const rawData = useStaticQuery<ToolboxQueryData>(graphql`
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
  const tools = rawData.toolbox.nodes.map(data => new Tool(data));

  return tools;
}

export type { ToolboxQueryData };
export default useToolboxData;

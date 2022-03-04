import { graphql, useStaticQuery } from 'gatsby';
import Tool from '../models/Tool';

type ToolboxQueryResponse = {
  toolbox: {
    nodes: Tool[];
  };
};

function useToolboxData(): Tool[] {
  const rawData = useStaticQuery<ToolboxQueryResponse>(graphql`
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

export type { ToolboxQueryResponse };
export default useToolboxData;

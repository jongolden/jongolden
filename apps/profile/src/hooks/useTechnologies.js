import { useStaticQuery, graphql } from 'gatsby';

function useTechnologies() {
  const dataQuery = useStaticQuery(graphql`
    query {
      allTechnologiesYaml {
        nodes {
          id
          label
        }
      }
    }
  `);

  const { allTechnologiesYaml: { nodes } } = dataQuery;

  return nodes;
}

export default useTechnologies;

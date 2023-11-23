import { useStaticQuery, graphql } from 'gatsby';

function useProgramming() {
  const dataQuery = useStaticQuery(graphql`
    query {
      allProgrammingYaml {
        nodes {
          experience
          label
        }
      }
    }
  `);

  const { allProgrammingYaml: { nodes } } = dataQuery;

  return nodes;
}

export default useProgramming;

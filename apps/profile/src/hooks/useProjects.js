import { useStaticQuery, graphql } from 'gatsby';

function useProgramming() {
  const dataQuery = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        nodes {
          description
          packageName
          stack
          role
          subtitle
          title
          url
          id
        }
      }
    }
  `);

  const { allProjectsYaml: { nodes } } = dataQuery;

  return nodes;
}

export default useProgramming;

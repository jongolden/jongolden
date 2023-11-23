import { useStaticQuery, graphql } from 'gatsby';

function useProgramming() {
  const dataQuery = useStaticQuery(graphql`
    query {
      allSocialYaml {
        nodes {
          title
          name
          href
          id
          icon
        }
      }
    }
  `);

  const { allSocialYaml: { nodes } } = dataQuery;

  return nodes;
}

export default useProgramming;

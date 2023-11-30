module.exports = {
  pathPrefix: "/jongolden",
  siteMetadata: {
    title: 'Jonathan Golden',
    description: 'Senior Software Developer',
    jobTitle: '',
    author: '@jongolden',
    siteUrl: 'https://jonathan-golden.me/',
    googleSiteVerification: 'W1pww_T49nZU5JJavdW4zmBBJgIk1OCeAsjnnjmp3DI',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jonathan Golden Personal Profile",
        short_name: "Jonathan Golden",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
      },
    },
  ],
};

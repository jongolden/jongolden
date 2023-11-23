module.exports = {
  pathPrefix: "/jongolden",
  siteMetadata: {
    title: 'Jonathan Golden',
    description: 'Senior Software Developer',
    jobTitle: '',
    author: '@jongolden',
    siteUrl: 'https://jonathan-golden.me/',
    googleSiteVerification: 'YM65urxVqPi5q3nXVGbzeu8g8zKcGtxb6_qBq_20eng',
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

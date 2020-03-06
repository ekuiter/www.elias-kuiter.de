module.exports = {
  siteMetadata: {
    title: 'Elias Kuiter',
    description: 'Individuelle Web- und Softwarelösungen',
    author: '@ekuiter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Elias Kuiter',
        short_name: 'E. Kuiter',
        start_url: '/',
        icon: 'src/images/icon.png'
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-36930408-1',
        anonymize: true
      }
    }
  ]
};
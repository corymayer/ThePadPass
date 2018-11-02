module.exports = {
  siteMetadata: {
    title: 'The Pad Apple Wallet Pass',
  },
  pathPrefix: "/ThePadPass",
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: 'rgb(248, 152, 31)',
        theme_color: 'rgb(248, 152, 31)',
        display: 'minimal-ui',
        icon: 'src/images/pad-id-card.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}

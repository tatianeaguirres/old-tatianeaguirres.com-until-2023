/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tatiane Aguirres Nogueira`,
    author: `Tatiane Aguirres Nogueira`,
    firstName: `Tatiane`,
    lastName: `Aguirres Nogueira`,
    description: `Tatiane Aguirres Nogueira's personal site`,
    occupation: `Front-end Developer`,
    keywords: [`Tatiane`, `Aguirres`, `Nogueira`, `Personal`, `Blog`, `Site`],
    siteUrl: `https://www.tatianeaguirres.com/` || `http://localhost:8000`
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tatiane Aguirres Nogueira's Personal Site`,
        short_name: `Tatiane`,
        description: `Personal site and blog of a front-end developer who loves to share knowledge.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `deeppink`,
        showSpinner: true
      }
    }
  ]
}

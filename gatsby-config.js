/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tatiane Aguirres`,
    author: `Tatiane Aguirres`,
    firstName: `Tatiane`,
    lastName: `Aguirres`,
    description: `Personal site and blog of a front-end developer who loves to share knowledge.`,
    occupation: `Front-end Developer`,
    keywords: [
      `Tatiane`,
      `Aguirres`,
      `Nogueira`,
      `Blog`,
      `Site`,
      `front-end`,
      `developer`,
      `web development`,
      `accessibility`
    ],
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          }
        ]
      }
    },
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
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://tatianeaguirres.us17.list-manage.com/subscribe/post?u=16ee6d34da915d49943cda81f&amp;id=ecdbc09d61'
      }
    }
  ]
}

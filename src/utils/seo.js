/** https://www.gatsbyjs.org/docs/add-seo-component/ */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, lang, meta, image: img, title, pathname }) => {
  const { site, fileName } = useStaticQuery(query)

  const image = {}

  if (img && img.src) {
    image.src = `${site.siteMetadata.siteUrl}${img.src}`
    image.height = img.height
    image.width = img.width
  } else {
    image.src = `${site.siteMetadata.siteUrl}${fileName.childImageSharp.fixed.src}`
    image.height = fileName.childImageSharp.fixed.height
    image.width = fileName.childImageSharp.fixed.width
  }

  const metaDescription = description || site.siteMetadata.description

  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}${pathname}`
    : site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: site.siteMetadata.keywords.join(`,`) },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription }
      ]
        .concat(
          image
            ? [
                { property: 'og:image', content: image.src },
                { property: 'og:image:width', content: image.width },
                { property: 'og:image:height', content: image.height },
                { name: 'twitter:card', content: 'summary_large_image' }
              ]
            : [{ name: 'twitter:card', content: 'summary' }]
        )
        .concat(meta)}
    />
  )
}

export default SEO

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }),
  pathname: PropTypes.string
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

const query = graphql`
  query SEO {
    fileName: file(relativePath: { eq: "images/preview-site.jpg" }) {
      childImageSharp {
        fixed(height: 500, width: 1000) {
          src
          width
          height
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
        keywords
        siteUrl
      }
    }
  }
`

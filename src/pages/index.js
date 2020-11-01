import React from 'react'
import { PageLayout, Banner, BlogLink, Cards, Newsletter } from '../components'
import { SEO, Utils } from '../utils'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const imagePreviewSite = data.fileName.childImageSharp.fixed
  const allFeaturedImages = data.allFile.edges || []
  const regex = /\/[blog].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)
  const lastPosts = data.allMarkdownRemark.edges || []

  return (
    <PageLayout page='parallax'>
      <SEO title='Home' image={imagePreviewSite} />
      <Banner page='index' label='Main Information'>
        <Cards />
      </Banner>
      <section className='u-section' aria-labelledby='posts'>
        <h2 id='posts' className='u-margin-bottom-md u-text-center'>
          Latest Posts
        </h2>
        <article className='u-row-flex-wrap'>
          {lastPosts
            .slice(Math.max(lastPosts.length - 3, 0))
            .map(({ node }) => (
              <BlogLink
                key={node.id}
                to={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                description={node.frontmatter.description || node.excerpt}
                tags={node.frontmatter.tags}
                featuredImage={featuredImageMap[node.fields.slug + 'images/']}
              />
            ))}
        </article>
      </section>
      <hr />
      <Newsletter />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/preview-site.jpg" }) {
      childImageSharp {
        fixed(height: 500, width: 1000) {
          src
          width
          height
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "DD MMMM, YYYY")
            description
            tags
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "jpg" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

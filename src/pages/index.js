import React from 'react'
import { PageLayout, Banner, BlogLink, Cards, Newsletter } from '../components'
import { SEO, Utils } from '../utils'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const allFeaturedImages = data.allFile.edges || []
  const regex = /\/[blog].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)
  const lastPosts = data.allMarkdownRemark.edges || []

  return (
    <PageLayout parallax={true}>
      <SEO title='Tatiane Aguirres Nogueira' />
      <Banner page='index'>
        <section className='u-text-center'>
          <h1 className='u-text-shadow'>Tatiane Aguirres</h1>
          <p className='u-text-shadow'>Front-end Developer</p>
        </section>
        <Cards />
      </Banner>
      <article className='u-section'>
        <h2 className='u-margin-bottom-md u-text-center'>Latest Posts</h2>
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
      </article>
      <hr />
      <Newsletter />
    </PageLayout>
  )
}

export const query = graphql`
  query {
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
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

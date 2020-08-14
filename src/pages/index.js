import React from 'react'
import {
  PageTitle,
  PageLayout,
  Card,
  BlogLink,
  EmailListForm
} from '../components'
import { SEO } from '../utils'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const lastPosts = data.allMarkdownRemark.edges || []

  return (
    <PageLayout>
      <SEO title='Tatiane Aguirres Nogueira' />
      <PageTitle title='How wonderful to see you here. You are very welcome!' />
      <Card />
      <h2 className='u-margin-bottom-sm'>Last posts</h2>
      <section className='u-column-reserve'>
        {lastPosts.slice(Math.max(lastPosts.length - 3, 0)).map(({ node }) => (
          <BlogLink
            key={node.id}
            to={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            description={node.frontmatter.description || node.excerpt}
            tags={node.frontmatter.tags}
          />
        ))}
      </section>
      <EmailListForm />
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
  }
`

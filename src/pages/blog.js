import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { PageLayout, BlogLink, Newsletter } from '../components'
import { SEO, Utils } from '../utils'

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: ''
  })

  const imagePreviewSite = data.fileName.childImageSharp.fixed
  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const regex = /\/[blog].*\/|$/

  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)
  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
      // query will run on the following fields
      const { description, title, tags, author } = post.node.frontmatter
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (description && description.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery) ||
        author.toLowerCase().includes(stdQuery) ||
        (tags && tags.join('').toLowerCase().includes(stdQuery))
      )
    })

    setState({
      query,
      filteredData
    })
  }

  const { filteredData, query } = state
  const filteredPosts = query !== '' ? filteredData : allPosts

  return (
    <PageLayout page='blog'>
      <SEO title='Blog' image={imagePreviewSite} pathname='/blog' />
      <h2 className='u-sr-only'>Blog Posts</h2>
      <form className='u-margin-bottom-lg' role='search'>
        <label className='u-sr-only' htmlFor='search'>
          Search blog posts
        </label>
        <input
          id='search'
          name='search'
          className='u-input'
          type='search'
          placeholder='Search'
          onChange={handleChange}
        />
      </form>
      <article className='u-row-flex-wrap'>
        {filteredPosts.map(({ node }) => (
          <BlogLink
            key={node.id}
            to={node.fields.slug}
            featuredImage={featuredImageMap[node.fields.slug + 'images/']}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description || node.excerpt}
            tags={node.frontmatter.tags}
          />
        ))}
      </article>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            author
            date(formatString: "DD MMMM, YYYY")
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

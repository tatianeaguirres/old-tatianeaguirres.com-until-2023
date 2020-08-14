import React from 'react'
import { graphql } from 'gatsby'
import PostTemplate from './post-template'
import clockIcon from '../../assets/svg/clock.svg'

const SubTitle = ({ ttr, date, author }) => (
  <p className='u-margin-bottom-md'>
    <img
      src={clockIcon}
      className='posts__clock-icon'
      alt='clock'
      title='clock'
      height='30px'
      width='30px'
    />
    <small>
      &nbsp; Time to read: {ttr} min |{' '}
      <time dateTime={new Date(date)}>{date}</time> | by {author}
    </small>
  </p>
)

export default ({ data }) => {
  const post = data.markdownRemark || []
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          ttr={post.timeToRead}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
        />
      }
      description={post.frontmatter.description || post.excerpt}
      html={post.html}
      image={image}
      pathname={post.fields.slug}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "DD MMMM, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 650) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt(pruneLength: 160)
      timeToRead
    }
  }
`

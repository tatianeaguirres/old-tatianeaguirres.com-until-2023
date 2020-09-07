import React from 'react'
import { graphql } from 'gatsby'
import { Banner, PageLayout, Newsletter } from '../components'
import { SEO } from '../utils'

export default ({ data }) => {
  const image = data.fileName.childImageSharp.fixed
  return (
    <PageLayout parallax={true}>
      <SEO
        title='Newsletter'
        description='Receive content about front-end development weekly.'
        image={image}
        pathname='/newsletter'
      />
      <Banner page='newsletter'>
        <blockquote>
          <span>Subscribe to our newsletter</span>
          <span>and receive the latest news</span>
          <span>about front-end development.</span>
        </blockquote>
      </Banner>
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
  }
`

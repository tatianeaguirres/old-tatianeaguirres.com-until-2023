import React from 'react'
import { graphql } from 'gatsby'
import { PageLayout, Ebook } from '../components'
import { SEO } from '../utils'

export default ({ data }) => {
  const image = data.fileName.childImageSharp.fixed

  return (
    <PageLayout>
      <SEO
        title='eBook The Ultimate Checklist for Front-end Developers'
        description='Discover which skills you need to become a high-skilled Front-end Developer.'
        image={image}
        pathname='/ebook'
      />
      <Ebook />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/preview-ebook.jpg" }) {
      childImageSharp {
        fixed(height: 630, width: 1200) {
          src
          width
          height
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import {
  AboutMe,
  Banner,
  FeaturedImage,
  PageLayout,
  SocialMedia,
  Newsletter
} from '../components'
import { SEO } from '../utils'

export default ({ data }) => {
  const image = data.fileName.childImageSharp.fixed
  return (
    <PageLayout page='parallax'>
      <SEO title='About' image={image} pathname='/about' />
      <Banner page='about' label='Blockquote'>
        <blockquote>
          <span>I help Front-end Developers</span>
          <span>to create beautiful user-focused apps,</span>
          <span>so they work in challenging projects,</span>
          <span>and acquire the right skills</span>
          <span>to become top-level professionals.</span>
        </blockquote>
      </Banner>
      <AboutMe />
      <hr />
      <section className='u-section u-text-center contact' aria-label='Contact'>
        <h2 className='u-margin-bottom-md'>Contact</h2>
        <p className='u-margin-bottom-xlg'>
          You can easily find me on any of the networks below:
        </p>
        <SocialMedia dark={false} />
      </section>
      <FeaturedImage />
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

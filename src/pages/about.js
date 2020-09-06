import React from 'react'
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
  return (
    <PageLayout parallax={true}>
      <SEO title='About Me' />
      <Banner page='about'>
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
      <section className='u-section u-text-center contact'>
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

import React from 'react'
import { Banner, PageLayout, ThanksSteps } from '../components'
import { SEO } from '../utils'

export default () => {
  return (
    <PageLayout parallax={true}>
      <SEO title='Thanks!' />
      <Banner page='thanks'>
        <blockquote>
          <span>Thank you for signing up!</span>
          <span>I want to make sure you won’t miss</span>
          <span>any content and stay in touch.</span>
          <span>So, here are a few tips for success</span>
          <span>when staying up with the content.</span>
        </blockquote>
      </Banner>
      <ThanksSteps />
    </PageLayout>
  )
}

import React from 'react'
import {
  PageLayout,
  PageTitle,
  SocialMedia,
  Slider,
  EmailListForm
} from '../components'
import { SEO } from '../utils'
import newsletterIcon from '../../assets/svg/newsletter.svg'

export default ({ data }) => {
  return (
    <PageLayout>
      <SEO title='About Me' />
      <PageTitle title='About Me' />
      <section>
        <p>
          Hi, I'm Tatiane Aguirres Nogueira - but you can call me{' '}
          <mark>Tati</mark>, a front-end developer from Brazil.{' '}
          <span role='img' aria-label='Brazil flag'>
            🇧🇷
          </span>
        </p>
        <p>
          I help other front-enders to create beautiful user-focused apps, so
          they work in challenging projects and acquire the right skills to
          become top-level developers.
        </p>
        <p>
          I live in the Netherlands{' '}
          <span role='img' aria-label='Netherlands flag'>
            🇳🇱
          </span>
          {'  '}
          since October 2019, and found my home here, among tulips and
          stroopwafels. In my free time, I love to read (mostly Agatha Christie
          and J.K. Rowling), have good drinks, and visit new places. I also have
          a cat called <del>Capiroto</del> Felicia and, sometimes, I like to
          take a chance in the kitchen to make delicious Brazilian foods.
        </p>
        <p>
          I’m always trying to contribute with the community sharing what I’ve
          learned. You can find some of my contributions in my{' '}
          <a
            href='https://tatianeaguirres.github.io/public-speaking/'
            target='_blank'
            rel='noreferrer noopener'
            className='u-link'
          >
            public speaking
          </a>
          .
        </p>
      </section>
      <section className='u-margin-bottom-md'>
        <h2 className='u-margin-bottom-md'>Contact</h2>
        <p>You can easily find me on any of the networks below:</p>
        <SocialMedia align='left' />
      </section>
      <section className='u-margin-bottom-md'>
        <h2 className='u-margin-bottom-md'>My journey</h2>
        <p>
          Good times to remember, lots of learning, sharing and friendships in
          the midst of technology.
        </p>
        <Slider />
      </section>
      <section>
        <h2 className='u-margin-bottom-md'>Don’t miss any post</h2>
        <div className='email-list-form__row'>
          <img
            src={newsletterIcon}
            className='email-list-form__newsletter-icon'
            alt='newsletter'
            title='newsletter'
          />
          <p>
            I'll send you only quality content like the latest blog posts,
            tutorials, tips & tricks, and much more related to front-end
            development.
          </p>
        </div>
        <EmailListForm ebook={false} />
      </section>
    </PageLayout>
  )
}

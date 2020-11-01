import React from 'react'

import twitterIcon from '../../../static/svg/twitter.svg'
import linkedinIcon from '../../../static/svg/linkedin.svg'
import githubLightIcon from '../../../static/svg/github-light.svg'
import githubDarkIcon from '../../../static/svg/github-dark.svg'
import gmailIcon from '../../../static/svg/gmail.svg'
import instagramIcon from '../../../static/svg/instagram.svg'

import './SocialMedia.scss'

export default ({ dark }) => {
  return (
    <article className='social-media'>
      <a
        href='mailto:aguirres.tati@gmail.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={gmailIcon}
          className='u-gmail social-media__icon'
          alt='gmail'
        />
      </a>
      <a
        href='https://twitter.com/tatianeaguirres'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={twitterIcon}
          className='u-twitter social-media__icon'
          alt='twitter'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/tatianeaguirres/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={linkedinIcon}
          className='u-linkedin social-media__icon'
          alt='linkedin'
        />
      </a>
      <a
        href='https://github.com/tatianeaguirres'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={dark ? githubDarkIcon : githubLightIcon}
          className='u-github social-media__icon'
          alt='github'
        />
      </a>
      <a
        href='https://instagram.com/tatianeaguirres'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img
          src={instagramIcon}
          className='u-instagram social-media__icon'
          alt='instagram'
        />
      </a>
    </article>
  )
}

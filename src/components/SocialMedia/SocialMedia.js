import React from 'react'

import twitterIcon from '../../../assets/svg/twitter.svg'
import linkedinIcon from '../../../assets/svg/linkedin.svg'
import githubLightIcon from '../../../assets/svg/github-light.svg'
import githubDarkIcon from '../../../assets/svg/github-dark.svg'
import gmailIcon from '../../../assets/svg/gmail.svg'
import instagramIcon from '../../../assets/svg/instagram.svg'

import './SocialMedia.scss'

export default ({ dark }) => {
  return (
    <div className='social-media'>
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
    </div>
  )
}

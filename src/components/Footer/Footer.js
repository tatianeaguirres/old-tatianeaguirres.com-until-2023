import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SocialMedia } from '../../components'

import avatar from '../../../assets/images/avatar.png'
import './Footer.scss'

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <footer className='footer'>
      <div className='footer__avatar'>
        <img
          src={avatar}
          alt='Tatianes avatar smiling and holding a microphone'
        />
      </div>
      <SocialMedia align='center' />
      <div className='footer__info'>
        <p>
          {author} &copy; {new Date().getFullYear()}. Made with
          <span className='footer__heart'>&nbsp;❤&nbsp;</span> &&nbsp;
          <a
            href='https://www.gatsbyjs.org/'
            className='u-link'
            target='_blank'
            rel='noreferrer noopener'
          >
            Gatsby
          </a>
        </p>
        <p>
          <a
            href='https://github.com/tatianeaguirres/tatianeaguirres.com/blob/master/LICENSE'
            className='u-link'
            target='_blank'
            rel='noreferrer noopener'
          >
            Terms of Use
          </a>
          . Icons made by&nbsp;
          <a
            href='https://www.flaticon.com/authors/freepik'
            title='Freepik'
            className='u-link'
            target='_blank'
            rel='noreferrer noopener'
          >
            Freepik
          </a>
          &nbsp; from&nbsp;
          <a
            href='https://www.flaticon.com/'
            title='Flaticon'
            className='u-link'
            target='_blank'
            rel='noreferrer noopener'
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </footer>
  )
}

const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`

import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SocialMedia } from '../../components'
import './Footer.scss'

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  const year = new Date().getFullYear()

  return (
    <footer className='c-footer'>
      <section className='footer__contact-info' aria-label='Contact'>
        <SocialMedia dark={true} />
      </section>

      <hr />

      <section
        className='u-row-flex-wrap u-margin-top-xlg footer__content-info'
        aria-label='Copyrights and links to privacy statements'
      >
        <p>
          {author} &copy; <time dateTime={year}>{year}</time> • Made with{' '}
          <span className='footer__heart' aria-label='love'>
            ❤
          </span>{' '}
          &{' '}
          <a
            href='https://www.gatsbyjs.org/'
            target='_blank'
            rel='noreferrer noopener'
          >
            Gatsby
          </a>
          .{' '}
        </p>
        <p>
          <a
            href='https://github.com/tatianeaguirres/tatianeaguirres.com/blob/master/LICENSE'
            target='_blank'
            rel='noreferrer noopener'
          >
            Terms of Use
          </a>{' '}
          • <Link to='/privacy'>Privacy Policy</Link> • Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/freepik'
            target='_blank'
            rel='noreferrer noopener'
          >
            Freepik
          </a>{' '}
          from{' '}
          <a
            href='https://www.flaticon.com/'
            target='_blank'
            rel='noreferrer noopener'
          >
            Flaticon
          </a>
          .
        </p>
      </section>
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

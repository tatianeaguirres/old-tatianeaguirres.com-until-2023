import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SocialMedia } from '../../components'
import './Footer.scss'

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <footer className='footer'>
      <article>
        <SocialMedia dark={true} />
        <hr />
        <section className='u-row-flex-wrap u-margin-top-xlg'>
          <p>
            {author} &copy;
            <time dateTime={new Date().getFullYear()}>
              {new Date().getFullYear()}
            </time>
            • Made with{' '}
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
      </article>
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

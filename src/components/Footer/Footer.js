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
        <section
          role='contentinfo'
          className='u-row-flex-wrap u-margin-top-xlg'
        >
          <p>
            {author} &copy; {new Date().getFullYear()} • Made with
            <span className='footer__heart'>&nbsp;❤&nbsp;</span> &&nbsp;
            <a
              href='https://www.gatsbyjs.org/'
              target='_blank'
              rel='noreferrer noopener'
            >
              Gatsby
            </a>
            .&nbsp;
          </p>
          <p>
            <a
              href='https://github.com/tatianeaguirres/tatianeaguirres.com/blob/master/LICENSE'
              target='_blank'
              rel='noreferrer noopener'
            >
              Terms of Use
            </a>
            &nbsp;•&nbsp;
            <Link to='/privacy'>Privacy Policy</Link>
            &nbsp;• Icons made by&nbsp;
            <a
              href='https://www.flaticon.com/authors/freepik'
              title='Freepik'
              target='_blank'
              rel='noreferrer noopener'
            >
              Freepik
            </a>
            &nbsp; from&nbsp;
            <a
              href='https://www.flaticon.com/'
              title='Flaticon'
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

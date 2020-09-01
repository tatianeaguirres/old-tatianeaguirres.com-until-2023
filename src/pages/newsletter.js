import React from 'react'
import { graphql } from 'gatsby'
import { PageLayout, PageTitle, EmailListForm } from '../components'
import { SEO } from '../utils'
import newsletterIcon from '../../assets/svg/newsletter.svg'

export default ({ data }) => {
  const image = data.fileName.childImageSharp.fixed
  return (
    <PageLayout>
      <SEO
        title='Newsletter'
        description='Receive content about front-end development weekly.'
        image={image}
        pathname='/newsletter'
      />
      <PageTitle title='Newsletter' />
      <section>
        <div className='email-list-form__row'>
          <img
            src={newsletterIcon}
            className='email-list-form__newsletter-icon'
            alt='newsletter'
            title='newsletter'
          />
          <p>
            I'll send you only quality content, such as the latest blog posts,
            tutorials, community events, tips and tricks and much more related
            to front-end development. Don't miss any post!
          </p>
        </div>
        <EmailListForm ebook={false} />
      </section>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/newsletter.jpg" }) {
      childImageSharp {
        fixed(height: 630, width: 1200) {
          src
          width
          height
        }
      }
    }
  }
`

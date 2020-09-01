import React from 'react'
import { graphql } from 'gatsby'
import { PageTitle, PageLayout, EmailListForm } from '../components'
import { SEO } from '../utils'
import eBookCover from '../images/ebook-cover-ipad.png'

export default ({ data }) => {
  const style = { maxWidth: '350px' }
  const image = data.fileName.childImageSharp.fixed

  return (
    <PageLayout>
      <SEO
        title='eBook The Ultimate Checklist for Front-end Developers'
        description='Discover which skills you need to become a high-skilled Front-end Developer.'
        image={image}
        pathname='/ebook'
      />
      <PageTitle title='Get this eBook for free!' />
      <article>
        <img
          src={eBookCover}
          alt='Cover of the eBook The Ultimate Checklist for Front-end Developers.'
          style={style}
          className='u-margin-bottom-lg'
        />
        <p>
          Discover which skills you need to become a high-skilled Front-end
          Developer.
        </p>
        <ol className='u-ordered-list'>
          <li>Put your e-mail here and check your inbox</li>
          <li>You will get an e-mail from me with the eBook</li>
          <li>
            You will know how to contact me with your questions over email
          </li>
        </ol>
        <EmailListForm ebook={true} />
      </article>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/ebook.jpg" }) {
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

import React from 'react'
import EmailListForm from '../EmailListForm/EmailListForm'
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <article className='u-section newsletter'>
      <h2 className='u-margin-bottom-md'>Don’t Miss Any Post</h2>
      <p>
        I'll send you only quality content like the latest blog posts,
        tutorials, tips & tricks, and much more related to front-end
        development.
      </p>
      <EmailListForm ebook={false} />
    </article>
  )
}

export default Newsletter

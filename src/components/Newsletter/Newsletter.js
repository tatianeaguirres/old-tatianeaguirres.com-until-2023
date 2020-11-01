import React from 'react'
import EmailListForm from '../EmailListForm/EmailListForm'
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <section className='u-section newsletter' aria-labelledby='newsletter'>
      <h2 id='newsletter' className='u-margin-bottom-md'>
        Don’t Miss Any Post
      </h2>
      <p>
        I'll send you only quality content like the latest blog posts,
        tutorials, tips & tricks, and much more related to front-end
        development.
      </p>
      <EmailListForm ebook={false} />
    </section>
  )
}

export default Newsletter

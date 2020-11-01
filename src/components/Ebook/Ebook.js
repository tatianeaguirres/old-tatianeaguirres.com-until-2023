import React from 'react'
import eBookCover from '../../images/ebook-cover-ipad.png'
import EmailListForm from '../EmailListForm/EmailListForm'
import './Ebook.scss'

const Ebook = () => {
  return (
    <>
      <article className='c-ebook'>
        <div className='ebook__image-wrapper'>
          <img
            src={eBookCover}
            alt='Cover of the eBook The Ultimate Checklist for Front-end Developers.'
          />
        </div>
        <section aria-labelledby='get-this-ebook'>
          <h2 id='get-this-ebook'>Get this eBook for free!</h2>
          <p>
            Discover which skills you need to become a{' '}
            <em>high-skilled Front-end Developer</em>.
          </p>
          <ol>
            <li>Put your e-mail here and check your inbox.</li>
            <li>You will get an e-mail from me with the eBook.</li>
            <li>
              You will know how to contact me with your questions over email.
            </li>
          </ol>
        </section>
      </article>
      <EmailListForm ebook={true} />
    </>
  )
}

export default Ebook

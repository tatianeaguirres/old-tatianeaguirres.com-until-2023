import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import './EmailListForm.scss'
import newsletterIcon from '../../../assets/svg/newsletter.svg'

const EmailListForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubscribed, setIsSubscribed] = useState('')

  const formatMsg = data => {
    setIsSubscribed(data.msg.split('<')[0])
  }

  const handleSubmit = e => {
    e.preventDefault()

    addToMailchimp(email, {
      FNAME: name
    })
      .then(data => {
        formatMsg(data)
      })
      .catch(error => {
        alert('There was an error, please try again later.')
        // Mailchimp only ever returns a 200 status code
      })
  }

  const handleChange = (event, setValue) => {
    setValue(event.target.value)
  }

  return (
    <section className='email-list-form'>
      <form onSubmit={handleSubmit}>
        <h2 className='u-margin-bottom-md'>Don’t miss any post</h2>
        <div className='email-list-form__row'>
          <img
            src={newsletterIcon}
            className='email-list-form__newsletter-icon'
            alt='newsletter'
            title='newsletter'
          />
          <p>
            I'll send you only quality content like the latest blog posts,
            tutorials, tips & tricks, and much more related to front-end
            development.
          </p>
        </div>
        <div className='email-list-form__wrapper'>
          <div className='email-list-form__row'>
            <label htmlFor='name'>Name:</label>
            <input
              className='u-input u-input--small'
              id='name'
              name='name'
              type='text'
              placeholder='Hermione'
              required
              aria-required='true'
              onChange={event => handleChange(event, setName)}
            />
          </div>
          <div className='email-list-form__row'>
            <label htmlFor='email'>Email:</label>
            <input
              className='u-input u-input--small'
              id='email'
              name='email'
              type='email'
              placeholder='hgranger@gmail.com'
              required
              aria-required='true'
              onChange={event => handleChange(event, setEmail)}
            />
          </div>
          <button
            type='submit'
            name='submit'
            className='u-button u-margin-bottom-md'
          >
            Subscribe
          </button>
          {isSubscribed && <p className='u-text-center'>{isSubscribed}</p>}
        </div>
      </form>
    </section>
  )
}

export default EmailListForm
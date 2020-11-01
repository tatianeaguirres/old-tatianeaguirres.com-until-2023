import React, { useState } from 'react'
import { navigate } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import './EmailListForm.scss'

const EmailListForm = ({ ebook }) => {
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
        setTimeout(() => {
          navigate('/thanks')
        }, 3000)
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
    <form
      aria-labelledby='sign-up'
      className='email-list-form'
      onSubmit={handleSubmit}
    >
      <fieldset className='email-list-form__wrapper'>
        <legend id='sign-up' className='u-sr-only'>
          Sign up for the newsletter
        </legend>

        <label className='u-sr-only' htmlFor='name'>
          Name:
        </label>
        <input
          className='u-input u-input--small'
          id='name'
          name='name'
          type='text'
          placeholder='First Name'
          required
          aria-required='true'
          onChange={event => handleChange(event, setName)}
        />

        <label className='u-sr-only' htmlFor='email'>
          Email:
        </label>
        <input
          className='u-input u-input--small'
          id='email'
          name='email'
          type='email'
          placeholder='Email Address'
          required
          aria-required='true'
          onChange={event => handleChange(event, setEmail)}
        />

        <button type='submit' name='submit' className='u-button'>
          {ebook ? 'Get your free eBook' : 'Subscribe'}
        </button>

        {isSubscribed && <p className='u-text-center'>{isSubscribed}</p>}
      </fieldset>
    </form>
  )
}

export default EmailListForm

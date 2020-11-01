import React from 'react'
import SocialMedia from '../SocialMedia/SocialMedia'
import avatarTDC from '../../../static/images/avatar-tdc.png'
import newsletterIcon from '../../../static/svg/newsletter.svg'
import networkingIcon from '../../../static/svg/networking.svg'
import './ThanksSteps.scss'

const ThanksSteps = () => {
  return (
    <article className='thanks-steps'>
      <section
        className='u-section thanks-steps__align-left'
        aria-label='step-1'
      >
        <div className='thanks-steps__align-left-wrap'>
          <img
            src={avatarTDC}
            className='thanks-steps__avatar'
            alt='Tatiane cartoon made for The Developers Conference event.'
          />
        </div>
        <div className='thanks-steps__align-left-wrap'>
          <h2 id='step-1'>Step 1: Add Tatiane To Your Contacts</h2>
          <p>
            <b>Add me to your contacts list</b>: Be sure to place
            aguirres.tati@gmail on your approved senders list to make sure our
            emails don’t end up in your spam folder.
          </p>
          <p>
            <b>Prioritize all e-mails</b>: If you're a Gmail user or you use any
            other web-based email that filters broadcasts away from your main
            inbox, be sure to "drag" any emails from the aguirres.tati@gmail.com
            or Tatiane Aguirres Nogueira into your Priority Inbox.
          </p>
        </div>
      </section>
      <hr />
      <section
        className='u-section thanks-steps__align-right'
        aria-label='step-2'
      >
        <div className='thanks-steps__align-left-wrap'>
          <h2 id='step-2'>Step 2: Let’s Get Social</h2>
          <p>
            Take a few moments and like and follow Tatiane on social media. Join
            me on Twitter, Linkedin, and GitHub. I share content daily about
            front-end development in general.
          </p>
          <p className='u-margin-bottom-xlg'>
            These are our primary methods of communication besides email
            updates.
          </p>
          <SocialMedia dark={false} />
        </div>
        <div className='thanks-steps__align-left-wrap'>
          <img
            src={networkingIcon}
            className='thanks-steps__avatar'
            alt='Speech balloons with likes and hashtags symbolizing social connection.'
          />
        </div>
      </section>
      <hr />
      <section
        className='u-section thanks-steps__align-left'
        aria-label='step-3'
      >
        <div className='thanks-steps__align-left-wrap'>
          <img
            src={newsletterIcon}
            className='thanks-steps__avatar'
            alt='An open envelope with a letter coming out of it.'
          />
        </div>
        <div className='thanks-steps__align-left-wrap'>
          <h2 id='step-3'>Step 3: Check Your Email</h2>
          <p>
            It’s time to check your email! Look in your inbox for an email from
            me with your eBook.
          </p>
          <p>
            If you have not received it yet, give our system a few minutes to
            send it to you. You may need to check your promo or spam folder.
          </p>
          <p>
            Thanks again for downloading the eBook and for subscribing to our
            mailing list.
          </p>
          <p>
            We sincerely appreciate your support and enjoy your participation in
            tatianeaguirres.com and on social media sites. Truly,{' '}
            <b>thank you!</b>
          </p>
        </div>
      </section>
    </article>
  )
}

export default ThanksSteps

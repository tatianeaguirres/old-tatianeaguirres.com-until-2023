import React from 'react'
import { PageTitle, PageLayout, SocialMedia } from '../components'
import { SEO } from '../utils'
import tdcDrawing from '../../assets/images/tdc-drawing.jpeg'

export default () => {
  const style = { maxWidth: '175px' }
  return (
    <PageLayout>
      <SEO title='Thanks!' />
      <PageTitle title='Thanks!' />
      <article>
        <p>
          Thank you for signing up! I want to make sure you won’t miss any
          content and stay in touch. So, here are a few tips for success when
          staying up with the content.
        </p>

        <section className='u-margin-bottom-md'>
          <h3>Step 1: Add Tatiane To Your Contacts</h3>
          <img
            src={tdcDrawing}
            className='u-margin-bottom-sm u-margin-right-sm u-float-left'
            alt='Tatiane caricature made for the TDC event.'
            style={style}
          />
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
        </section>

        <section className='u-margin-bottom-lg u-clear-left'>
          <h3>Step 2: Let’s Get Social</h3>
          <p>
            Take a few moments and like and follow Elias on social media. Join
            me on Twitter, Linkedin, and GitHub.
          </p>
          <p>
            These are our primary methods of communication besides email
            updates.
          </p>
          <SocialMedia align='left' />
        </section>

        <section>
          <h3>Step 3: Check Your Email</h3>
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
            tatianeaguirres.com and on social media sites. Truly, thank you!
          </p>
        </section>

        <p className='u-logo u-margin-bottom-xlg'>Tati</p>
      </article>
    </PageLayout>
  )
}

import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import Header from './Header/Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'

export default ({ children, page }) => (
  <>
    <Header />
    <Container page={page}>{children}</Container>
    <Footer />
    <CookieConsent
      buttonText='Accept'
      disableStyles={true}
      buttonClasses='u-button'
      containerClasses='cookie-consent__container'
      contentClasses='cookie-consent__content'
      cookieName='tatianeaguirres-google-analytics'
      acceptOnScroll={true}
      onAccept={({ acceptedByScrolling }) => {
        if (acceptedByScrolling) {
          alert(
            'By using our website, you have agreed to our Privacy Policy and its terms.'
          )
        }
      }}
    >
      This website uses cookies to do static analyses and enhance the user
      experience. By using our website, you hereby consent to our{' '}
      <Link to='/privacy' className='u-link'>
        Privacy Policy
      </Link>{' '}
      and agree to its terms.
    </CookieConsent>
  </>
)

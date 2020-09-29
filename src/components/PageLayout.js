import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import Header from './Header/Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'

const PageLayout = ({ children, page }) => {
  return (
    <>
      <Header />
      <Container page={page}>{children}</Container>
      <Footer />
      <CookieConsent
        buttonText='OK'
        disableStyles={true}
        buttonClasses='u-button'
        containerClasses='cookie-consent__container'
        contentClasses='cookie-consent__content'
        cookieName='tatianeaguirres-google-analytics'
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
}

export default PageLayout

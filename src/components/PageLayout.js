import React, { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import Header from './Header/Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import Modal from './Modal/Modal'

const PageLayout = ({ children, page }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
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
            setOpenModal(true)
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
      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </>
  )
}

export default PageLayout

import React from 'react'
import Header from './Header/Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'

export default ({ children, page }) => (
  <>
    <Header />
    <Container page={page}>{children}</Container>
    <Footer />
  </>
)

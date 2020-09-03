import React from 'react'
import Header from './Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'

export default ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
)

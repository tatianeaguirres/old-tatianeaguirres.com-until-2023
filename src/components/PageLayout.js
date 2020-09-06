import React from 'react'
import Header from './Header/Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'

export default ({ children, parallax }) => (
  <>
    <Header />
    <Container parallax={parallax}>{children}</Container>
    <Footer />
  </>
)

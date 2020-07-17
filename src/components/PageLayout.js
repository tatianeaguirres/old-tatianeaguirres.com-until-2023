import React from 'react'
import Header from './Header'
import Container from './Container/Container'
import Footer from './Footer/Footer'
import TopImage from './TopImage'
import BottomImage from './BottomImage'

export default ({ children }) => (
  <>
    <TopImage />
    <Header />
    <Container>{children}</Container>
    <Footer />
    <BottomImage />
  </>
)

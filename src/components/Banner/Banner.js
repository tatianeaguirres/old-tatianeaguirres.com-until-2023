import React from 'react'
import './Banner.scss'

const Banner = ({ children, page }) => {
  return <article className={`banner banner__${page}`}>{children}</article>
}

export default Banner

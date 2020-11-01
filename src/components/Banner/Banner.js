import React from 'react'
import './Banner.scss'

const Banner = ({ children, page, label }) => {
  return (
    <section className={`banner banner__${page}`} aria-label={label}>
      {children}
    </section>
  )
}

export default Banner

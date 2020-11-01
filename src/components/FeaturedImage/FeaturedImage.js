import React from 'react'
import './FeaturedImage.scss'

const FeaturedImage = ({ children }) => {
  return (
    <article className='featured-image' aria-hidden='true'>
      {children}
    </article>
  )
}

export default FeaturedImage

import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './BlogLink.scss'

export default props => {
  return (
    <Link className='blog-link' to={props.to} title={props.title}>
      <article className='blog-link__post u-text-center'>
        <Img
          fluid={props.featuredImage}
          objectFit='cover'
          objectPosition='50% 50%'
        />
        <h3>{props.title}</h3>
        <small className='blog-link__tags'>
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </small>
      </article>
    </Link>
  )
}

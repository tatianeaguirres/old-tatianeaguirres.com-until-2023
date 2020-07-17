import React from 'react'
import { Link } from 'gatsby'
import './BlogLink.scss'
import LabelIcon from '../../../assets/svg/label.svg'

export default props => {
  return (
    <Link className='blog-link' to={props.to} title={props.title}>
      <article className='blog-link__post'>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.description}</p>
        <small className='blog-link__tags'>
          <img
            src={LabelIcon}
            className='blog-link__icon'
            alt='label'
            title='label'
          />
          {props.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </small>
      </article>
    </Link>
  )
}

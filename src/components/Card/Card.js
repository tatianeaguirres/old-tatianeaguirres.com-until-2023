import React from 'react'
import womanIcon from '../../../assets/svg/woman.svg'
import trophyIcon from '../../../assets/svg/trophy.svg'
import devicesIcon from '../../../assets/svg/devices.svg'
import './Card.scss'

export default () => (
  <section className='cards'>
    <a href='/about' className='cards__card'>
      <img
        src={womanIcon}
        className='cards__card-icon'
        alt='woman'
        title='woman'
      />
      <h3>Who is Tatiane?</h3>
      <p>Find out more about me and my journey as a front-end developer.</p>
    </a>
    <a
      href='https://tatianeaguirres.github.io/public-speaking/'
      target='_blank'
      rel='noreferrer noopener'
      className='cards__card'
    >
      <img
        src={trophyIcon}
        className='cards__card-icon'
        alt='trophy'
        title='trophy'
      />
      <h3>Public Speaking</h3>
      <p>
        Tatiane event calendar and list of presentation, volunteer and
        initiatives.
      </p>
    </a>
    <a href='/blog' className='cards__card'>
      <img
        src={devicesIcon}
        className='cards__card-icon'
        alt='devices'
        title='devices'
      />
      <h3>Blog Posts</h3>
      <p>
        Everything a front-ender needs to know to become a top-level
        professional.
      </p>
    </a>
  </section>
)

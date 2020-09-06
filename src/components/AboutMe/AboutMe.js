import React from 'react'
import avatar from '../../../static/assets/images/avatar.png'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <article className='u-section c-about-me'>
      <div>
        <img
          src={avatar}
          className='about-me__avatar'
          alt='Tatiane avatar holding a microphone while speaking.'
        />
      </div>
      <div>
        <h2>
          Hi friend! I'm Tatiane, a Front-end Developer Specialized in Visual
          and Web Accessibility.
        </h2>
        <p>
          I'm Brazilian, but I live in the Netherlands since October 2019, and
          found my home here, among tulips and stroopwafels. In my free time, I
          love to read (mostly Agatha Christie and J.K. Rowling), have good
          drinks, and visit new places. I also have a cat called{' '}
          <del>Capiroto</del> Felicia and, sometimes, I like to take a chance in
          the kitchen to make delicious Brazilian foods.
        </p>
        <p>
          I’m always trying to contribute with the community sharing what I’ve
          learned. You can find some of my contributions in my{' '}
          <a
            href='https://tatianeaguirres.github.io/public-speaking/'
            target='_blank'
            rel='noreferrer noopener'
            className='u-link'
          >
            public speaking
          </a>
          .
        </p>
      </div>
    </article>
  )
}

export default AboutMe

import React from 'react'
import womanIcon from '../../../static/svg/woman.svg'
import trophyIcon from '../../../static/svg/trophy.svg'
import eBookIcon from '../../../static/svg/ebook.svg'
import './Cards.scss'

export default () => (
  <article className='cards'>
    <a href='/about' className='cards__card'>
      <section aria-labelledby='who-is-tatiane'>
        <img
          src={womanIcon}
          className='cards__card-icon'
          alt='woman'
          title='woman'
        />
        <h3 id='who-is-tatiane'>Who is Tatiane?</h3>
        <p>Find out more about me and my journey as a front-end developer.</p>
      </section>
    </a>

    <a
      href='https://tatianeaguirres.github.io/public-speaking/'
      target='_blank'
      rel='noreferrer noopener'
      className='cards__card'
    >
      <section aria-labelledby='public-speaking'>
        <img
          src={trophyIcon}
          className='cards__card-icon'
          alt='trophy'
          title='trophy'
        />
        <h3 id='public-speaking'>Public Speaking</h3>
        <p>
          Tatiane event calendar and list of presentation, volunteer and
          initiatives.
        </p>
      </section>
    </a>

    <a href='/ebook' className='cards__card'>
      <section aria-labelledby='ebook'>
        <img
          src={eBookIcon}
          className='cards__card-icon'
          alt='ebook'
          title='ebook'
        />
        <h3 id='ebook'>Free eBook</h3>
        <p>
          Discover which skills you need to become a high-skilled Front-ender.
        </p>
      </section>
    </a>
  </article>
)

import React from 'react'
import { PageLayout } from '../components'
import pageNotFoundIcon from '../../static/assets/svg/page-not-found.svg'

export default () => {
  return (
    <PageLayout>
      <section>
        <img
          src={pageNotFoundIcon}
          className='u-small-image'
          alt='404 not found'
        />
        <h2 className='u-margin-top-md u-margin-bottom-sm'>
          Oops The page you were looking for doesn't exist.
        </h2>
        <p>
          You may have mistyped the address or the page may have moved.&nbsp;
          <a href='/' title='Home' className='u-link'>
            Take me back to the home page
          </a>
          .
        </p>
      </section>
    </PageLayout>
  )
}

import React from 'react'
import { PageTitle, PageLayout } from '../components'
import pageNotFoundIcon from '../../assets/svg/page-not-found.svg'

export default () => {
  return (
    <PageLayout>
      <PageTitle title='404: Not Found' />
      <section>
        <img
          src={pageNotFoundIcon}
          height='200px'
          width='200px'
          alt='404 not found'
        />
        <h3 className='u-margin-top-md'>
          Oops The page you were looking for doesn't exist.
        </h3>
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

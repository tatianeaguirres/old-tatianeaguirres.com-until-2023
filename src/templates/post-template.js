import React from 'react'
import { PageLayout, PageTitle } from '../components'
import SEO from '../utils/seo'

export default ({ title, description, html, subTitle, image, pathname }) => (
  <PageLayout>
    <SEO
      title={title}
      description={description}
      image={image}
      pathname={pathname}
    />
    <PageTitle title={title} />
    {subTitle}
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <p className='u-logo u-margin-bottom-xs'>Tati</p>
  </PageLayout>
)

import React from 'react'
import { PageLayout, PageTitle } from '../components'
import SEO from '../utils/seo'
import { DiscussionEmbed } from 'disqus-react'

const PostTemplate = ({
  title,
  description,
  html,
  subTitle,
  image,
  pathname
}) => {
  const shortname = 'tatianeaguirres'
  const url = 'https://www.tatianeaguirres.com' + pathname
  const threadConfig = {
    url: url,
    identifier: url,
    title: title
  }
  return (
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
      <p>XoXo</p>
      <p className='u-logo u-margin-bottom-xlg'>Tatiane</p>
      <DiscussionEmbed
        className='disqus-box'
        shortname={shortname}
        config={threadConfig}
      />
    </PageLayout>
  )
}

export default PostTemplate

import React from 'react'

export default ({ title, children }) => (
  <h2 className='u-margin-bottom-md'>
    {title}&nbsp;<span>{children}</span>&nbsp;
  </h2>
)

import React from 'react'

export default ({ children, parallax }) => (
  <main className={`${parallax ? 'u-parallax' : 'u-container'}`}>
    {children}
  </main>
)

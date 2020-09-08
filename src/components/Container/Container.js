import React from 'react'

export default ({ children, page }) => (
  <main className={`u-container u-container__${page}`}>{children}</main>
)

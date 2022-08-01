import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'
import './Navbar.scss'
import CloseIcon from '../../../static/svg/close.svg'

const Navbar = forwardRef((props, ref) => {
  const device = props.props.device
  const closeMenu = props.props.closeMenu
  const locationPath =
    typeof window !== 'undefined' ? window.location.pathname : ''

  const menuItems = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
    { path: '/about', name: 'About' },
    { path: '/ebook', name: 'eBook' },
    { path: '/newsletter', name: 'Newsletter' }
  ]

  if (device === 'mobile') useLockBodyScroll()

  return (
    <nav
      ref={ref}
      className={device === 'mobile' ? 'c-navbar--mobile' : 'c-navbar--desktop'}
      aria-label='Main menu.'
    >
      {device === 'mobile' && (
        <div className='navbar__button-row'>
          <button
            onClick={closeMenu}
            aria-label='Close menu'
            className='navbar__close-button'
          >
            <img
              src={CloseIcon}
              className='navbar__close-icon'
              alt=''
              aria-hidden='true'
            />
          </button>
        </div>
      )}

      <ul className='navbar__nav-list'>
        {menuItems.map(item => (
          <li className='navbar__nav-item' key={item.name}>
            <Link
              to={item.path}
              activeClassName='navbar__nav-link--active'
              className='navbar__nav-link'
              onClick={closeMenu}
              {...(locationPath === item.path && { 'aria-current': 'page' })}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
})

export default Navbar

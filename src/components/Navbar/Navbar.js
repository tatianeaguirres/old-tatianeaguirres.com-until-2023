import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import useLockBodyScroll from '../../hooks/use-lock-body-scroll'
import './Navbar.scss'
import CloseIcon from '../../../static/svg/close.svg'

const Navbar = forwardRef((props, ref) => {
  const device = props.props.device
  const closeMenu = props.props.closeMenu

  if (device === 'mobile') useLockBodyScroll()

  return (
    <div
      ref={ref}
      className={device === 'mobile' ? 'c-navbar--mobile' : 'c-navbar--desktop'}
      aria-modal={device === 'mobile' ? 'true' : 'false'}
      aria-labelledby='menubutton'
    >
      <nav aria-labelledby='mainmenulabel' className='navbar__nav'>
        <h2 id='mainmenulabel' className='u-sr-only'>
          Main Menu
        </h2>

        {device === 'mobile' && (
          <div className='navbar__button-row'>
            <button
              onClick={closeMenu}
              aria-label='Close menu'
              className='navbar__close-button'
            >
              <img src={CloseIcon} className='navbar__close-icon' alt='close' />
            </button>
          </div>
        )}

        <ul className='navbar__nav-list'>
          <li className='navbar__nav-item'>
            <Link
              to='/'
              activeClassName='active'
              className='navbar__nav-link'
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className='navbar__nav-item'>
            <Link
              to='/blog'
              activeClassName='active'
              className='navbar__nav-link'
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          <li className='navbar__nav-item'>
            <Link
              to='/about'
              activeClassName='active'
              className='navbar__nav-link'
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className='navbar__nav-item'>
            <Link
              to='/ebook'
              activeClassName='active'
              className='navbar__nav-link'
              onClick={closeMenu}
            >
              eBook
            </Link>
          </li>
          <li className='navbar__nav-item'>
            <Link
              to='/newsletter'
              activeClassName='active'
              className='navbar__nav-link'
              onClick={closeMenu}
            >
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
})

export default Navbar

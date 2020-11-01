import React, { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import './Header.scss'
import MenuIcon from '../../../static/svg/menu.svg'
import useOnclickOutside from '../../hooks/use-onclick-outside'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const ref = useRef()

  const mobileProps = {
    device: 'mobile',
    closeMenu: () => setOpenMobileNav(false)
  }
  const desktopProps = { device: 'desktop' }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({
    query: '(max-device-width: 1023px)'
  })

  useOnclickOutside(ref, () => setOpenMobileNav(false))

  return (
    <header className='c-header'>
      <Link
        to='/'
        className='header__logo'
        aria-label='Tatiane Aguirres Homepage'
      >
        <h1>Tatiane Aguirres</h1>
      </Link>

      {isDesktopOrLaptop && <Navbar props={desktopProps} />}

      {isTabletOrMobile && (
        <>
          <button
            className='header__menu-button u-mobile-only'
            onClick={() => setOpenMobileNav(true)}
            aria-label='Open menu'
            aria-haspopup='true'
          >
            <img
              src={MenuIcon}
              className='header__menu-icon'
              alt=''
              aria-hidden='true'
            />
          </button>
          {openMobileNav && <Navbar props={mobileProps} ref={ref} />}
        </>
      )}
    </header>
  )
}

export default Header

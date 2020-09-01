import React, { useContext } from 'react'
import ThemeContext from '../../utils/theme'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'gatsby'
import './Navbar.scss'

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed='top' collapseOnSelect expand='md'>
      <Navbar.Brand as={Link} to='/'>
        <h1>
          Tatiane <span className='u-desktop-only'>Aguirres Nogueira</span>
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
        <Nav className='nav-links'>
          <Nav.Link as={Link} to='/' title='Home'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/blog' title='Blog'>
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to='/about' title='About'>
            About
          </Nav.Link>
          <Nav.Link as={Link} to='/ebook' title='eBook'>
            eBook
          </Nav.Link>
          <Nav.Link as={Link} to='/newsletter' title='Newsletter'>
            Newsletter
          </Nav.Link>
          <Form className='my-auto'>
            <Form.Check
              type='switch'
              id='custom-switch'
              label=''
              title='Toggle Theme'
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import './Modal.scss'

const Modal = ({ onClose, textContent }) => {
  return (
    <div className='modal' role='dialog' aria-modal='true'>
      <p className='u-text-center'>
        By using our website, you have agreed to our &nbsp;
        <Link to='/privacy' className='u-link'>
          Privacy Policy
        </Link>
        &nbsp; and its terms.
      </p>
      <button className='u-button' onClick={onClose} aria-label='Close modal'>
        OK
      </button>
    </div>
  )
}

export default Modal

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>

      <div className='footer-text'>
        <p>MyAct</p>
      </div>
      <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faFacebook} />
        <FontAwesomeIcon className='icon' icon={faInstagram} />
        <FontAwesomeIcon className='icon' icon={faTwitter} />
      </div>
    </div>
  )
}

export default Footer
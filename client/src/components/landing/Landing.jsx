import React from 'react'
import { Navigation } from '../Navbar/Navigation';
import values from '../../img/values.svg';
import '../../styles/Landing.css';
import Logo from './Logo';
import therapyHumaaans from '../../img/therapyHumaaans.svg';

export const Landing = () => {
  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className='header'>
          MyAct
        </div>
        {/* <Logo /> */}
        <div className='pic-container'>

          <object className='pic-content' data={therapyHumaaans} type='image/svg+xml' />
        </div>
        <div className='btn-container'>
          <a className='about-button' >
            Click Here to Find Out More
          </a>
        </div>
      </div>
    </>
  )
}

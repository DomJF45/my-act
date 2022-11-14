import React from 'react';
import '../../styles/Navigation.css';

export const Navigation = () => {
  return (
    <>
      <div className='my-navbar'>
        <a className='nav-title '>MyAct</a>
        <a>About</a>
        <a>Services</a>
        <div className='login-container'>
          <a>Log In</a>
        </div>
      </div>
      <div className='div-divider' />
    </>
  )
}

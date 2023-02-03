import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItems = ({ items, mode }) => {

  const activeStyle = {
    color: '#9747FF',
    textDecoration: 'none'
  }
  const inActiveStyle = {
    color: mode === 'dark' ? 'rgba(255,255,255, 0.87)' : 'gray',
    textDecoration: 'none'
  }

  return (
    <NavLink to={items.path} className='right-link'
      style={({isActive}) => isActive ? activeStyle : inActiveStyle}
    >
      {items.title}
    </NavLink>
  )
  
}

export default MenuItems
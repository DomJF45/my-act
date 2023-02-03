import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const MenuItems = ({ items, mode }) => {

  const [submenuActive, setSubmenuActive] = useState(false);

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
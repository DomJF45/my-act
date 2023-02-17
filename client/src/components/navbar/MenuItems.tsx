import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  items: {
    path: string,
    title: string
  }
  mode: string
}

const MenuItems = (props: Props) => {

  const activeStyle = {
    color: '#9747FF',
    textDecoration: 'none'
  }
  const inActiveStyle = {
    color: props.mode === 'dark' ? 'rgba(255,255,255, 0.87)' : 'gray',
    textDecoration: 'none'
  }

  return (
    <NavLink to={props.items.path} className='right-link'
      style={({isActive}) => isActive ? activeStyle : inActiveStyle}
    >
      {props.items.title}
    </NavLink>
  )
  
}

export default MenuItems
import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/Footer.css';

const Footer = () => {

  const { mode } = useSelector((state) => state.theme);
  const color = (mode === 'dark' ? '#fff' : '#303030');
  
  return (
    <div className='footer-container'>
      <span style={{color: color}} >MyAct</span>
      <span style={{fontSize: '12px', margin: 0, padding: 0, color: color}}>©</span>
    </div>
  )
}

export default Footer
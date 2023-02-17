import React from 'react';
import '../../styles/Footer.css';
import { useAppSelector } from '../../app/hooks';

const Footer = () => {

  const { mode } = useAppSelector((state) => state.theme);
  const color = (mode === 'dark' ? '#fff' : '#303030');
  
  return (
    <div className='footer-container'>
      <span style={{color: color}} >MyAct</span>
      <span style={{fontSize: '12px', margin: 0, padding: 0, color: color}}>©</span>
    </div>
  )
}

export default Footer
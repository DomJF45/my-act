import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import '../../styles/MobileSidebar.css';
import { IconContext } from 'react-icons';

const MobileSidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleNavigate = (route) => {
    navigate(route);
    showSidebar();
  }

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='top-container'>
        <div className='dynamic-sidebar'>
          <div className='btn-background' style={sidebar ? {backgroundColor: 'transparent'} : {backgroundColor: "#9747FF"}} onClick={() => showSidebar(!sidebar)}>
            { sidebar ? <AiIcons.AiOutlineDoubleRight size={20} /> : <AiIcons.AiOutlineDoubleLeft size={20} />}
          </div>
          
          <div id='my-sidebar' className='m-sidebar' style={sidebar ? {opacity: 1, width: '200px', height: '300px'} : {opacity: 0, width: 0, height: 0}}>
            <a onClick={() => handleNavigate('/dashboard')}>Dashboard</a>
            <a onClick={() => handleNavigate('/processes')}>Processes</a>
            <a onClick={() => handleNavigate('/dashboard/exercises')}> Exercises</a>
          </div>
        </div>
      </div>
      </IconContext.Provider>
    </>
  )
}

export default MobileSidebar
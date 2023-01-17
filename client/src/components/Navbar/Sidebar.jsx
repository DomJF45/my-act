import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData';
import '../../styles/Sidebar.css';
import { IconContext } from 'react-icons';

const Sidebar = (props) => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                { sidebar ? <AiIcons.AiOutlineDoubleLeft /> : <AiIcons.AiOutlineDoubleRight />}
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                sidebar ? <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path} color='#fff'>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                </> : <>
                  <li key={index} className={item.cName}>
                    <Link to={item.path} color="#fff">
                      {item.icon}
                    </Link>
                  </li>
                </>
                
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
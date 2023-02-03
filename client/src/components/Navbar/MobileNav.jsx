import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../../features/theme/themeSlice';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import { SidebarData } from './sidebarData';
import { NavLink } from 'react-router-dom';
import { HiMoon, HiLightBulb } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import '../../styles/MobileSidebar.css';


const MobileNav = () => {

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const activeStyle = {
    color: '#9747FF',
    textDecoration: 'none'
  }
  const inActiveStyle = {
    color: mode === 'dark' ? '#fff' : 'gray',
    textDecoration: 'none'
  }

  const setDark = () => {
    dispatch(setDarkTheme());
  }
  const setLight = () => {
    dispatch(setLightTheme());
  }

  const handleToggleTheme = () => {
    mode === 'dark' ? setLight() : setDark();
  }

  const [openSideBar, setOpenSideBar] = useState(false);
  
  const navigate = useNavigate();

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  }

  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div
          style={{
            width: '100%',
            position: 'sticky',
            top: '0',
            zIndex: 1000
          }}
        >
          
          <nav
            style={{
              height: '4.75rem',
              display: 'flex',
              justifyContent: 'center',
              borderBottom: mode === 'dark' ? ' 1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
              backgroundColor: mode === 'dark' ? '#303030' : '#fff',
              transition: '.5s ease-in-out'
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '88%',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <a onClick={() => navigate('/dashboard') && setOpenSideBar(false)}>

                <span style={{float: 'left', fontSize: '1.5rem', fontWeight: '300', margin: 0, padding: 0, color: mode === 'dark' ? '#fff' : '#303030', transition: '.5s ease-in-out'}}>My<span style={{color: '#9747FF', margin: 0, padding: 0}}>ACT</span></span>
              </a>

              <a style={{float: 'right', zIndex: 9999}}>
                {openSideBar ? <RiCloseLine onClick={handleOpenSideBar} size={30} />:<RiMenu5Line onClick={handleOpenSideBar} size={30} />}
              </a>
            </div>
          </nav>
        </div>
        <div
          style={{
            position: 'fixed',
            background: 'hsla(0, 0%, 69.8%, 0.9)',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            zIndex: openSideBar ? 12 : -1,
            opacity: openSideBar ? 1 : 0,
            transition: '.5s ease-in-out'
          }}
        />
        <div 
          style={{
            
            zIndex: 998,
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100%',
            maxWidth: '450px',
            transform: openSideBar ? 'translateX(0%)' : 'translate(-100%)',
            transition: '.5s ease-in-out',
            
          }}
          id="side-container"
        >
          <ul
            style={{
              height: '100%',
              listStyle: 'none',
              marginTop: '5rem',
              paddingLeft: '20px'
            }}
          >
            {SidebarData.map((item, index) => {
              return (
                <div style={{marginBottom: '1rem'}}>
                  <li className='m-nav-header'>{item.header}</li>
                  <NavLink to={item.path} onClick={handleOpenSideBar} style={({isActive}) => 
                    isActive ? activeStyle : inActiveStyle
                  }>{item.title}</NavLink>
                  <span style={{margin: 0, padding: 0}}><BiChevronRight /></span>
                </div>
              )
            })}
          </ul>
          
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            marginTop: 'auto',
            height: '120px',
            backgroundColor: mode === 'dark' ? '#303030' : '#fff',
            zIndex: 999,
            borderTop: mode === 'dark' ? ' 1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            transition: '.5s ease-in-out'
          }}>
            <a>
              { mode === 'dark' ? <HiLightBulb onClick={handleToggleTheme} size={35} /> : <HiMoon onClick={handleToggleTheme} size={35} />}
            </a>
            <a>
              <FaUserCircle size={35} />
            </a>
            <p style={{position: 'fixed', bottom: '-3px', fontSize: '12px'}}>{'Made with <3 by '}<a href='https://www.webbydom.works' target='_blank' >Dom</a></p>
          </div>
        </div>

        

      </IconContext.Provider>
    </>
  )
}

export default MobileNav
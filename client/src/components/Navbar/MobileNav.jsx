import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { IoIosMenu } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';
import { RiMenu5Line, RiCloseLine } from 'react-icons/ri';
import { SidebarData } from './sidebarData';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import { GiStripedSun } from 'react-icons/gi'


const MobileNav = () => {

  const [openSideBar, setOpenSideBar] = useState(false);

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
              borderBottom: '1px solid rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
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
              <a style={{float: 'left', fontSize: '1.5rem', fontWeight: '300'}}>My<a style={{color: '#9747FF'}}>ACT</a></a>
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
            transition: '.3s ease-in'
          }}
        />
        <div 
          style={{
            backgroundColor: '#fff',
            zIndex: 998,
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100%',
            maxWidth: '450px',
            transform: openSideBar ? 'translateX(0%)' : 'translate(-100%)',
            transition: '.5s ease-in-out',
            color: '#303030'
          }}
        >
          <ul
            style={{
              height: '100%',
              listStyle: 'none',
              marginTop: '5rem',
              paddingLeft: '20px'
            }}
          >
            {/* <div style={{marginBottom: '1rem'}}>
              <li className='m-nav-header'>View Your Progress</li>
              <li className='m-nav-sub'>Dashboard</li>
            </div>
            <div style={{marginBottom: '1rem'}}>
              <li className='m-nav-header'>Learn</li>
              <a>
                <li className='m-nav-sub'>Processes</li>
              </a>
            </div>
            <div style={{marginBottom: '1rem'}}>
              <li className='m-nav-header'>Engage</li>
              <li className='m-nav-sub'>Exercises</li>
            </div> */}
            {SidebarData.map((item, index) => {
              return (
                <div style={{marginBottom: '1rem'}}>
                  <li className='m-nav-header'>{item.header}</li>
                  <Link to={item.path} style={{textDecoration: 'none', color: '#333333'}}>{item.title}</Link>
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
            backgroundColor: '#fff',
            zIndex: 999,
            borderTop: '1px solid #ececec',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}>
            <div>
              <AiFillGithub size={35} />
            </div>
            <div>
              <AiFillTwitterCircle size={35} />
            </div>
            <div>
              <AiFillFacebook size={35} />
            </div>
            <div>
              <GiStripedSun size={35} />
            </div>
            <p style={{position: 'fixed', bottom: '-3px', fontSize: '12px'}}>{'Made with <3 by Dom'}</p>
          </div>
        </div>

        

      </IconContext.Provider>
    </>
  )
}

export default MobileNav
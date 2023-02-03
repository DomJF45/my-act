import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../../features/theme/themeSlice';
import { HiMoon } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { SidebarData } from './sidebarData';
import MenuItems from './MenuItems';
import '../../styles/Navigation.css';

const TopContainer = () => {

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const setDark = () => {
    dispatch(setDarkTheme());
  }

  const setLight = () => {
    dispatch(setLightTheme());
  }

  const handleToggleTheme = () => {
    if (mode === 'dark') {
      setLight();
    } else {
      setDark();
    }
  }

  return (
    <>
      <div 
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
          zIndex: 1000,
          
        }}
      >
        <nav
          style={{
            height: '4.75rem',
            display: 'flex',
            justifyContent: 'center',
            borderBottom: mode === 'dark' ? ' 1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
            backgroundColor: mode === 'dark' ? '#303030' : '#fff',
            transition: '.3s ease'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '1240px',
              
              alignItems: 'center'
            }}
          >
            <div className='left'
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'baseline'
              }}
            >

              <a style={{
                float: 'left',
                fontSize: '1.5rem',
                fontWeight: '300',
                color: mode === 'dark' ? 'rgba(255,255,255,.87)' : '#303030',
                transition: '.3s ease'
              }}>
                My<a style={{color: '#9747FF'}}>ACT</a>
              </a>
              <div
                style={{
                  marginLeft: '15px',
                  justifyContent: 'space-evenly',
                  width: '350px',
                  display: 'flex',
                }}
                className='right-child'
              >

                {SidebarData.map((menu, index) => {
                  return <MenuItems items={menu} key={index} mode={mode} />
                })}
                
                
              </div>
            </div>
            <div className='right'
              style={{
                width: '100px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >

              <a style={{
                float: 'right',
                zIndex: 9999,
                cursor: 'pointer'
              }}><HiMoon className='n-icon' size={30} onClick={handleToggleTheme} style={{
                color: mode === 'dark' ? '#9747FF' : 'rgb(205,205,205)'
              }} /></a>
              <a style={{
                float: 'right',
                zIndex: 9999,
                cursor: 'pointer'
              }}><FaUserCircle className='n-icon' size={30} style={{color: mode === 'dark' ? 'rgba(255,255,255, .87)' : 'rgb(205,205,205)'}} /></a>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default TopContainer
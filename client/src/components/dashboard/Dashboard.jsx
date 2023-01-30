import React, { useEffect, useState } from 'react';
import '../../styles/Dashboard.css';
import NavbarHandler from '../navbar/NavbarHandler';
import DataContainer from './cards/data/DataContainer';
import useScreenSize from '../util/hooks/useScreenSize';
// import UserNav from '../navbar/UserNav';

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const window = useScreenSize();

  return (
    <>
      <div className='dashboard-container'>
        <div className="container">
          <div className='animate-fade-up'>
            <div className="title-and-user-container">
              <div className="d-flex">
                {/* {window.width > 1030 && <>
                  <div style={{display: 'flex', width: '100%', float: 'left', marginLeft: '3%'}}>
                  <p className='lead' style={{fontSize: '3rem'}}>My</p><p className='lead' style={{color: '#9747FF', fontSize: '3rem'}}>ACT</p>
                  </div>
                </>} */}
                
                {/* <UserNav /> */}
              </div>
              <DataContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
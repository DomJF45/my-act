import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Logo from '../landing/Logo'
import FullNavbar from '../navbar/FullNavbar'
import '../../styles/Dashboard.css'
import EventCard from './cards/EventCard'
import ProcessesCard from './cards/ProcessesCard'
import SettingsCard from './cards/SettingsCard'
import ExercisesCard from './cards/ExercisesCard'
import { useContext } from 'react'
import { UserContext } from '../../App'
import Sidebar from '../navbar/Sidebar'
import NavbarHandler from '../navbar/NavbarHandler'
import DataContainer from './cards/data/DataContainer'
import {IconContext} from 'react-icons'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillCaretDown} from 'react-icons/ai'

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  let testUser;
  if (user) {
    testUser = true;
  } else {
    testUser = false;
  }
  
  const navigate = useNavigate();

  useEffect(() => {

    /**
     * Handle GET user data here
     * fields: userId
     */


    console.log(testUser)

  })

  return (
    <>
      {/* <Container>
        <h1>Dashboard</h1>
      </Container> */}
        <div className='dashboard-container'>
          
          <NavbarHandler />
          <div className="container" style={{
            
          }}>

          <div className='animate-fade-up'>
            {/* <div className="link-container">
              <ProcessesCard />
              <ExercisesCard />
            </div> */}
            <div className="title-and-user-container">
              <div className="d-flex">

                <div style={{display: 'flex', width: '100%', float: 'left', marginLeft: '3%'}}>

                  <p className='lead' style={{fontSize: '3rem'}}>Welcome to My</p><p className='lead' style={{color: '#9747FF', fontSize: '3rem'}}>ACT</p>
                  
                </div>
                <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'center',
                      alignSelf: 'center',
                      width: '90px',
                      backgroundColor: 'rgb(235, 235, 235)',
                      marginBottom: '10px',
                      height: '50px',
                      borderRadius: '10px'
                    }}
                  >
                    <IconContext.Provider value={{color: '#9747FF'}}>
                      <AiFillCaretDown size={20} style={{marginRight: '13px'}} />
                      <p style={{float: 'right', marginRight: '10px', marginTop: '15px'}}><FaUserCircle size={30} /> </p>
                    </IconContext.Provider>
                  </div>
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
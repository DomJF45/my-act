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
            <div className="container mt-5">
              <h1>Welcome to MyAct!</h1>
              <DataContainer />
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard
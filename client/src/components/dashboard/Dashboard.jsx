import React, { useEffect } from 'react'
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
      <Container>
        <h1>Dashboard</h1>
      </Container>
      <Container>
        <div className='animate-fade-up'>
          <div className="link-container">
            <ProcessesCard />
            <EventCard />
            <ExercisesCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard
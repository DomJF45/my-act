import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import Logo from '../landing/Logo'
import FullNavbar from '../navbar/FullNavbar'
import '../../styles/Dashboard.css'
import EventCard from './cards/EventCard'
import ProcessesCard from './cards/ProcessesCard'
import SettingsCard from './cards/SettingsCard'

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <>
      <FullNavbar />
      <Container>
        <h1>Dashboard</h1>
      </Container>
      <Container>
        <div className='animate-fade-up'>
          <div className="link-container">
            <ProcessesCard />
            <EventCard />
            <SettingsCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Dashboard
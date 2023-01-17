import React from 'react'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import FullNavbar from '../navbar/FullNavbar'
import { processData } from './processData'
import '../../styles/Processes.css'
import '../../styles/Card.css'
import GoBack from '../util/directory/GoBack'
import Sidebar from '../navbar/Sidebar'
import NavbarHandler from '../navbar/NavbarHandler'

const Processes = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='dashboard-container'>
        <NavbarHandler />
        <div className="container"
          
        >

        <GoBack page={-1} />
        <div className='animate-fade-up'>
          <div className="link-container" style={{
          }}>
            { processData.map((process, index) => (
              <a className='card-box' onClick={() => navigate(process.link)} key={index}>
                <p>{process.processName}</p>
                <div>
                  <img className="card-img" src={require(`../../img/${process.processImg}`)} />
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Processes
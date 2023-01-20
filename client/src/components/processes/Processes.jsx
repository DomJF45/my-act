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
import { IconContext } from 'react-icons'

const Processes = () => {

  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className='dashboard-container'>
          <NavbarHandler />
          <div className="container"
            
          >

          <GoBack page={-1} />
          <div className='animate-fade-up'>
            <div className="link-container" style={{
              position: 'relative'
            }}>
              { processData.map((process, index) => (
                <a className='card-box' onClick={() => navigate(process.link)} key={index}>
                  <p>{process.processName}</p>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '15px'
                    }}
                  >
                    {process.processImg}
                  </div>
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Processes
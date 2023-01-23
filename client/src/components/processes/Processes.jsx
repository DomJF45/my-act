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
import useScreenSize from '../util/hooks/useScreenSize'

const Processes = () => {

  const navigate = useNavigate();
  const window = useScreenSize();

  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className='dashboard-container'>
          <NavbarHandler />
          <div className="container"
            
          >

          <GoBack page={-1} />
          <div className='animate-fade-up'>
            <h1>Process Hub</h1>
            <p>Each of these cards will direct you to more information about their process, along with an interactive exercise!</p>
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
                    { window.width > 1030 ? process.processImg : process.processImgSmall }
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
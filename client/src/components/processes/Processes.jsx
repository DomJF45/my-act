import React from 'react'
import { useNavigate } from 'react-router'
import { Container } from 'react-bootstrap'
import FullNavbar from '../navbar/FullNavbar'
import { processData } from './processData'
import '../../styles/Processes.css'

const Processes = () => {

  const navigate = useNavigate();

  return (
    <>
      <FullNavbar />
      <Container>
        <div className='animate-fade-up'>
          <div className="link-container">
            { processData.map((process) => (
              <a className='card-box' onClick={() => navigate(process.link)}>
                <p>{process.processName}</p>
                <div>
                  <img className="card-img" src={require(`../../img/${process.processImg}`)} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Processes
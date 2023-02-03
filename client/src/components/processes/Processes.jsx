import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import FullNavbar from '../navbar/FullNavbar';
import { processData } from './processData';
import '../../styles/Processes.css';
import '../../styles/Card.css';
import GoBack from '../util/directory/GoBack';
import Sidebar from '../navbar/Sidebar';
import NavbarHandler from '../navbar/NavbarHandler';
import { IconContext } from 'react-icons';

import Process from './Process';

const Processes = () => {

  const navigate = useNavigate();
  

  const { mode } = useSelector((state) => state.theme);

  const darkLightModeColor = (mode === 'dark' ? '#fff' : '#303030');

  return (
    <>
      <IconContext.Provider value={{color: mode === 'dark' ? '#B379FE' : '#9747FF'}}>
        {/* <div className='dashboard-container'> */}
          <div className="container"
            style={{
              height: '100%',
              marginTop: '50px'
            }}
          >
          <div className='animate-fade-up'>
            {/* <h1 style={{color: darkLightModeColor}}>Process Hub</h1>
            <p style={{color: darkLightModeColor}}>Each of these cards will direct you to more information about their process, along with an interactive exercise!</p> */}
            <div className="link-container" style={{
              position: 'relative'
            }}>
              { processData.map((process, index) => (
                <Process process={process} index={index} />
              ))}
            </div>
          </div>
          </div>
        {/* </div> */}
      </IconContext.Provider>
    </>
  )
}

export default Processes
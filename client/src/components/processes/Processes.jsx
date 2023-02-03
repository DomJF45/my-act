import React from 'react';
import { useSelector } from 'react-redux';
import { processData } from './processData';
import { IconContext } from 'react-icons';
import Process from './Process';
import '../../styles/Processes.css';
import '../../styles/Card.css';


const Processes = () => {

  const { mode } = useSelector((state) => state.theme);

  return (
    <>
      <IconContext.Provider value={{color: mode === 'dark' ? '#B379FE' : '#9747FF'}}>
        <div className="container"
          style={{
            height: '100%',
            marginTop: '50px'
          }}
        >
          <div className='animate-fade-up'>
            <div className="link-container" style={{
              position: 'relative'
            }}>
              { processData.map((process, index) => (
                <Process process={process} index={index} />
              ))}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Processes
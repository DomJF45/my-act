import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/Processes.css'

const GoBack = ({page}) => {

  const navigate = useNavigate();

  return (
    // <>
    //   <div className='back' onClick={() => navigate(page)}  >
    //     <FontAwesomeIcon className='icon' icon={faChevronLeft}size={'xl'} />
    //     <p>Go Back</p>
    //   </div>
    // </>
    <div 
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'start'
      }}
    >
      <div
      style={{
        backgroundColor: '#f4ebff',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        width: '150px',
        float: 'right',
        borderRadius: '15px',
        marginBottom: '5rem',
      }}
      id='go-to'
      onClick={() => navigate(page)}
      >
        <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faChevronLeft} />
        <p style={{padding: 0, margin: '0 0 0 1rem', textAlign: 'end'}}>Go Back</p>
      </div>
    </div>
  )
}

export default GoBack
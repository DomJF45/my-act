import React from 'react'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '../../../styles/Processes.css'

const GoBack = ({page}) => {

  const navigate = useNavigate();

  return (
    <>
      <div className='back' onClick={() => navigate(page)}  >
        <FontAwesomeIcon className='icon' icon={faChevronLeft}size={'xl'} />
        <p>Go Back</p>
      </div>
    </>
  )
}

export default GoBack
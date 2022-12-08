import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { m } from 'framer-motion';

const GoToExercise = ({ page }) => {

  const navigate = useNavigate();

  return (
    <div 
      style={{
        backgroundColor: '#f4ebff',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        width: '150px',
        float: 'right',
        borderRadius: '15px'
      }}
      onClick={() => navigate(page)}
    >
      <p style={{padding: 0, margin: '0 0 0 .5rem'}}>Go to Exercise</p>
      <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faChevronRight} />
    </div>
  )
}

export default GoToExercise
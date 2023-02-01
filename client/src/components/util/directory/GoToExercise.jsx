import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/util/Utils.css'

const GoToExercise = ({ page }) => {

  const navigate = useNavigate();

  return (
    <div 
      style={{
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end'
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
        <p style={{padding: 0, margin: '0 0 0 .5rem'}}>Go to Exercise</p>
        <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faChevronRight} />
      </div>
    </div>
  )
}

export default GoToExercise
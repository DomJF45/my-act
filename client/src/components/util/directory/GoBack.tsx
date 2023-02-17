import React from 'react';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/Processes.css';
import { useAppSelector } from '../../../app/hooks';

interface Props {
  page: string
}

const GoBack = ({page}: Props) => {

  const navigate = useNavigate();
  const { mode } = useAppSelector((state) => state.theme);

  return (
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
        backgroundColor: mode === 'dark' ? '#A967FF' : '#f4ebff',
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
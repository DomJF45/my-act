import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../../styles/util/Utils.css';

const Next = (props) => {

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
        borderRadius: '15px',
        position: 'relative'
      }}
      onClick={() => props.setForm(props.nextForm)}
      id='next-component'
      disabled={props.nextForm > 6 || props.nextForm < 0}
    >
      <div>
        <p style={{padding: 0, margin: '0 0 0 1rem'}}>Next</p>
      </div>
      <div style={{
        position: 'absolute',
        right: 10
      }}>
        <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faChevronRight} />
      </div>
    </div>
  )
}

export default Next
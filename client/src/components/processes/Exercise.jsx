import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import useScreenSize from '../util/hooks/useScreenSize';

const Exercise = ({ exercise }) => {

  const navigate = useNavigate();
  const window = useScreenSize();
  const { mode } = useSelector((state) => state.theme);

  return (
    <IconContext.Provider value={{color: mode === 'dark' ? '#B379FE' : '#9747FF'}}>
      <a className='card-box' onClick={() => navigate(exercise.link)}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100% - 120px)'
          }}
        >
          {window.width > 1030 ? exercise.icon : exercise.iconSmall }
        </div>
        <div style={{
          width: '100%',
          background: mode === 'dark' ? "#333333" : '#fff',
          height: '120px',
          position: 'absolute',
          bottom: 0,
          borderTop: '1px solid #dac0fc',
          borderBottomLeftRadius: '5px',
          borderBottomRightRadius: '5px'
        }}>
          <div>
            <span style={{fontSize: '2rem', marginLeft: '1rem'}}>{exercise.name}</span>
          </div>
          <div>
            <p style={{fontSize: '.8rem', marginLeft: '1rem', padding: 0, marginBlock: 0}}>{exercise.process}</p>
          </div>
        </div>
      </a>
    </IconContext.Provider>
  )
}

export default Exercise
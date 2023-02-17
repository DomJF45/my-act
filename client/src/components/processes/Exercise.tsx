import React from 'react';
import { useNavigate } from 'react-router';
import { IconContext } from 'react-icons';
import useScreenSize from '../util/hooks/useScreenSize';
import { useAppSelector } from '../../app/hooks';

interface iExercise {
  name: string;
  process: string;
  link: string;
  icon: JSX.Element;
  iconSmall: JSX.Element;
}

interface Props {
  exercise: iExercise;
}

const Exercise = ({ exercise }: Props) => {

  const navigate = useNavigate();
  const window = useScreenSize();
  const { mode } = useAppSelector((state) => state.theme);

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
          {window.width! > 1030 ? exercise.icon : exercise.iconSmall }
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
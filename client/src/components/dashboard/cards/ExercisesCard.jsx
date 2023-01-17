import React from 'react'
import { useNavigate } from 'react-router-dom'
import exerciseImg from '../../../img/self_img.png'
import '../../../styles/Card.css'
import { IconContext } from 'react-icons';
import * as GiIcons from 'react-icons/gi';

const ExercisesCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>

        <a className="card-box" onClick={() => navigate('exercises')}>
          <p>Exercises</p>
          <div className='card-icon'>
            {/* <img className="card-img" src={exerciseImg} /> */}
            <GiIcons.GiLotus size={150} />
          </div>
        </a>
      </IconContext.Provider>
    </>
  )
}

export default ExercisesCard
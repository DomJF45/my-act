import React from 'react'
import { useNavigate } from 'react-router-dom'
import exerciseImg from '../../../img/self_img.png'

const ExercisesCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <a className="card-box" onClick={() => navigate('exercises')}>
        <p>Exercises</p>
        <div>
          <img className="card-img" src={exerciseImg} />
        </div>
      </a>
    </>
  )
}

export default ExercisesCard
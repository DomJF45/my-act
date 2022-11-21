import React from 'react'
import { useNavigate } from 'react-router'
import processesImg from '../../../img/defusion_img.png';
import '../../../styles/Card.css'

const ProcessesCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <a className="card-box" onClick={() => navigate('processes')}>
        <p>Processes</p>
        <div>
          <img className="card-img" src={processesImg} />
        </div>
      </a>
    </>
  )
}

export default ProcessesCard
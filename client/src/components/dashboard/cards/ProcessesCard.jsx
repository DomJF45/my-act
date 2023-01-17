import React from 'react'
import { useNavigate } from 'react-router'
import processesImg from '../../../img/defusion_img.png';
import '../../../styles/Card.css'
import * as BiIcons from 'react-icons/bi';
import { IconContext } from 'react-icons';

const ProcessesCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>

        <a className="card-box" onClick={() => navigate('processes')}>
          <p className='card-title'>Processes</p>
          <div className='card-icon'>
            {/* <img className="card-img" src={processesImg} /> */}
            <BiIcons.BiBrain size={150}/>
          </div>
        </a>
      
      </IconContext.Provider>
    </>
  )
}

export default ProcessesCard
import React from 'react';
import { useNavigate } from 'react-router'
import GoBack from '../util/directory/GoBack'
import '../../styles/Card.css'
import NavbarHandler from '../navbar/NavbarHandler';

const exerciseInfo = [
  {
    name: 'Breathing',
    process: 'present',
    link: '/processes/present/breathing'
  },
  {
    name: 'Card Sort',
    process: 'values',
    link: '/processes/values/card-sort'
  },
  {
    name: 'Goal Setting',
    process: 'commiment',
    link: '/processes/commitment/goal-setting'
  },
  {
    name: 'The Observing Self',
    process: 'self',
    link: '/processes/self/the-observing-self'
  },
  {
    name: 'Label Thoughts',
    process: 'defusion',
    link: '/processes/defusion/label-thoughts'
  },
  {
    name: 'Acceptance Survey',
    process: 'acceptance',
    link: '/processes/acceptance/acceptance-survey'
  }
]

const AllExercises = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-container">
        <NavbarHandler />
        <div className='container'>
          <GoBack page={-1} />
          <div className='animate-fade-up'>
            <div className='link-container'>
              {
                exerciseInfo.map((ex) => {
                  return (
                    <a className='card-box' onClick={() => navigate(ex.link)}>
                      <p>{ex.name}</p>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllExercises
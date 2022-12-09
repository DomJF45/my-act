import React from 'react';
import { useNavigate } from 'react-router'
import GoBack from '../util/directory/GoBack'

const exerciseInfo = [
  {
    name: 'Breathing',
    process: 'present',
    link: '/dashboard/processes/present/breathing'
  },
  {
    name: 'Card Sort',
    process: 'values',
    link: '/dashboard/processes/values/card-sort'
  },
  {
    name: 'Goal Setting',
    process: 'commiment',
    link: '/dashboard/processes/commitment/goal-setting'
  },
  {
    name: 'The Observing Self',
    process: 'self',
    link: '/dashboard/processes/self/the-observing-self'
  },
  {
    name: 'Label Thoughts',
    process: 'defusion',
    link: '/dashboard/processes/defusion/label-thoughts'
  },
  {
    name: 'Acceptance Survey',
    process: 'acceptance',
    link: '/dashboard/processes/acceptance/acceptance-survey'
  }
]

const AllExercises = () => {

  const navigate = useNavigate();

  return (
    <>
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
    </>
  )
}

export default AllExercises
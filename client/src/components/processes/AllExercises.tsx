import React from 'react';
import { AiOutlineHourglass } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { MdSelfImprovement } from 'react-icons/md';
import { RiTreasureMapLine } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';
import Exercise from './Exercise';
import '../../styles/Card.css';

const bigIcon = 100;
const smallIcon = 80;

const exerciseInfo = [
  {
    name: 'Breathing',
    process: 'present',
    link: '/processes/present/breathing',
    icon: <AiOutlineHourglass size={bigIcon} />,
    iconSmall: <AiOutlineHourglass size={smallIcon} />
  },
  {
    name: 'Card Sort',
    process: 'values',
    link: '/processes/values/card-sort',
    icon: <BsBook size={bigIcon} />,
    iconSmall: <BsBook size={smallIcon} />
  },
  {
    name: 'Goal Setting',
    process: 'commiment',
    link: '/processes/commitment/goal-setting',
    icon: <FaRegHandshake size={bigIcon} />,
    iconSmall: <FaRegHandshake size={smallIcon} />
  },
  {
    name: 'The Observing Self',
    process: 'self',
    link: '/processes/self/the-observing-self',
    icon: <MdSelfImprovement size={bigIcon} />,
    iconSmall: <MdSelfImprovement size={smallIcon} />
  },
  {
    name: 'Label Thoughts',
    process: 'defusion',
    link: '/processes/defusion/label-thoughts',
    icon: <RiTreasureMapLine size={bigIcon} />,
    iconSmall: <RiTreasureMapLine size={smallIcon} />
  },
  {
    name: 'Acceptance Survey',
    process: 'acceptance',
    link: '/processes/acceptance/acceptance-survey',
    icon: <FaRegSmile size={bigIcon} />,
    iconSmall: <FaRegSmile size={smallIcon} />
  }
]

const AllExercises = () => {


  return (
    <>
      <div className='container' style={{ height: '100%', marginTop: '50px'}}>
        <div className='animate-fade-up'>
          <div className='link-container'>
            {
              exerciseInfo.map((ex, index) => {
                return (
                  <Exercise exercise={ex} key={index} />
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
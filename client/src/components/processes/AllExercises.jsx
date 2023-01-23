import React from 'react';
import { useNavigate } from 'react-router';
import GoBack from '../util/directory/GoBack';
import '../../styles/Card.css';
import NavbarHandler from '../navbar/NavbarHandler';
import { IconContext } from 'react-icons';
import { AiOutlineHourglass } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { MdSelfImprovement } from 'react-icons/md';
import { RiTreasureMapLine } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';
import useScreenSize from '../util/hooks/useScreenSize';

const bigIcon = 100;
const smallIcon = 50;

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

  const navigate = useNavigate();
  const window = useScreenSize();

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
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '15px',
                          right: '15px'
                        }}
                      >
                        { window.width > 1030 ? ex.icon : ex.iconSmall}
                      </div>
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
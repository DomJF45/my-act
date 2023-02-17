import React from 'react'
import { BsChevronDown } from 'react-icons/bs';

import '../../styles/Landing.css';
import Triangle from './shapes/Triangle';
import Circle from './shapes/Circle';
import Rectangle from './shapes/Rectangle';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import GetStarted from './GetStarted';


export const Landing = () => {


  const therapy: string = require("../../img/therapyHumaaans.svg").default;
  const aware: string = require("../../img/aware.svg").default;
  const present: string = require("../../img/presentHumans.svg").default;

  return (
    <>
      <div className="main-wrapper">
        <div className='title-header'>
          <div className='title-header-text'>
            <p><span style={{color: '#9747FF'}}> Acceptance</span> and<span style={{color: '#9747FF'}}> Committment</span> Therapy From <span style={{color: '#9747FF'}}>Home</span>!</p>
          </div>
        
          <object id="title-header-pic" data={therapy} type='image/svg+xml' style={{width: '500px', zIndex: 1, overflowX: 'hidden'}} aria-labelledby='title-header'/>
          <Triangle />
          <Circle />
          <Rectangle />
        </div>
        <div className='learn-more'>
          <p style={{margin: 0, fontSize: '16px'}}>learn more</p>
          <BsChevronDown size={20} />
        </div>
        <div>
          <SectionOne svg={aware} />
          <SectionTwo svg={present} />
          <GetStarted />
        </div>
      </div>
    </>
  )

}

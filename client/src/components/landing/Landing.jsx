import React, { useRef } from 'react'
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
import { BsChevronDown } from 'react-icons/bs';
import therapyHumaaans from '../../img/therapyHumaaans.svg';
import aware from '../../img/aware.svg';
import presentHumans from '../../img/presentHumans.svg';
import '../../styles/Landing.css';
import Shape from './Shape';
import triangle from '../../img/shapes/triangle.svg';
import circle from '../../img/shapes/circle.svg';
import rectangle from '../../img/shapes/rectangle.svg';
import Triangle from './shapes/Triangle';
import Circle from './shapes/Circle';
import Rectangle from './shapes/Rectangle';
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import GetStarted from './GetStarted';


const userDirect = [
  {
    message: 'Sign Up!',
    directory: '/register'
  },
  {
    message: 'Continue as a guest',
    directory: '/dashboard'
  }
]

export const Landing = () => {

  const navigate = useNavigate();

  const {ref, inView, entry} = useInView({
    threshold: .6,
    triggerOnce: false
  })

  const { secondRef } = useInView({
    threshold: .6,
    triggerOnce: false
  })

  const variants = {
    visibile: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  }

  const leftVariant = {
    slideIn: {
      x: -100,
      opacity: 0
    },
    slideOut: {
      x: 0,
      opacity: 1
    }
  }

  const rightVariant = {
    slideRight: {

    }
  }

  // return (
  //   <>
  //     <div className="main-wrapper">
  //       <div className="main-grid">
  //         <Triangle shape={triangle} />
  //         <Circle shape={circle} />
  //         <div className='header'>
  //           <p style={{fontSize: '6rem', zIndex: '999'}}> My<span style={{color: '#9747FF'}}>ACT</span></p>
  //           <div className='pic-container'>
  //             <object className='pic-content' data={therapyHumaaans} type='image/svg+xml' />
  //           </div>
  //         </div>
  //         <div className="header-text">
  //           <p>Conduct<span style={{color: '#9747FF'}}> Acceptance</span> and<span style={{color: '#9747FF'}}> Committment</span> Therapy exercises from <span style={{color: '#9747FF'}}>home</span>!</p>
  //           <div className='btn-container'>
  //             {userDirect.map((direct) => {
  //               return (
  //                 <a className='user-box' onClick={() => navigate(direct.directory)}>
  //                   <div
  //                     style={{
  //                       display: 'flex',
  //                       justifyContent: 'center',
  //                       alignItems: 'center'
  //                     }}
  //                   >
  //                     <span style={{fontSize: '1.3rem'}}>{direct.message}</span>
  //                   </div>
  //                 </a>
  //               )
  //             })}
  //           </div>
  //         </div>
  //       </div>

  //       <div className='main-grid-alt'>
  //         <Rectangle shape={rectangle} />
  //         <div className="header-alt">
  //           <p style={{fontSize: '6rem'}}>Be <span style={{color: '#9747FF'}}>Aware</span></p>
  //           <div className='pic-container-alt'>
  //             <object className='pic-content' data={aware} type='image/svg+xml' style={{width: '700px'}} />
  //           </div>
  //         </div>
  //         <div className='header-text-alt'>
  //           <p><span style={{color: '#9747FF'}}>Experience</span> interactive <span style={{color: '#9747FF'}}>ACT</span> exercises that will <span style={{color: '#9747FF'}}>help</span> develop six of the <span style={{color: '#9747FF'}}>core</span> processes</p>
            
  //         </div>
  //       </div>
  //       <div className='main-grid'>
  //         <div className='header'>
  //           <h1>Be Present</h1>
  //           <div className='pic-container'>
  //             <object className='pic-content' data={presentHumans} type='image/svg+xml' />
  //           </div>
  //         </div>
  //         <div className="header-text">
  //           <p>Become more <span style={{color: '#9747FF'}}> present</span> in your everyday surroundings!</p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )

  return (
    <>
      <div className="main-wrapper">
        <div className='title-header'>
          <div className='title-header-text'>
            <p><span style={{color: '#9747FF'}}> Acceptance</span> and<span style={{color: '#9747FF'}}> Committment</span> Therapy From <span style={{color: '#9747FF'}}>Home</span>!</p>
          </div>
        
          <object id="title-header-pic" data={therapyHumaaans} type='image/svg+xml' style={{width: '500px', zIndex: 1, overflowX: 'hidden'}} />
          <Triangle shape={triangle} />
          <Circle shape={circle} />
          <Rectangle shape={rectangle} />
        </div>
        <div className='learn-more'>
          <p style={{margin: 0, fontSize: '16px'}}>learn more</p>
          <BsChevronDown size={20} />
        </div>
        <div>
          <SectionOne svg={aware} />
          <SectionTwo svg={presentHumans} />
          <GetStarted />
        </div>
      </div>
    </>
  )

}

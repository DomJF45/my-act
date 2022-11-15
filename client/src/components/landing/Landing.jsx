import React from 'react'
import Navigation from '../Navbar/Navigation';
import { useNavigate } from 'react-router';
import values from '../../img/values.svg';
import '../../styles/Landing.css';
import Logo from './Logo';
import { Button, Container } from 'react-bootstrap';
import therapyHumaaans from '../../img/therapyHumaaans.svg';
import selfImg from '../../img/self_img.png'
import aware from '../../img/aware.svg';
import presentHumans from '../../img/presentHumans.svg';
import Footer from '../footer/Footer';

export const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <div className="main-wrapper">
        <div className='main-grid'>
          <div className='header'>
            <h1>MyAct</h1>
            <div className='pic-container'>
              <object className='pic-content' data={therapyHumaaans} type='image/svg+xml' />
            </div>
            <div className='div-divider' />
          </div>
          <div className="header-text">
            <div>
              <p>Conduct Acceptance and Committment Therapy exercises from the comfort of your own home!</p>
            </div>
            
            <div className='btn-container'>
              <Button className='mt-5' style={{width: "100%"}} onClick={() => navigate("/register")}>Sign Up!</Button>
            </div>
          </div>
        </div>

        

        <div className='main-grid-alt'>
          <div className='header-text'>
            <div>
              <p>Experience interactive ACT exercises that will help develop each of the core processes:</p>
              <ul>
                <li>Present</li>
                <li>Values</li>
                <li>Commitment</li>
                <li>Self</li>
                <li>Defusion</li>
                <li>Acceptance</li>
              </ul>
            </div>
          </div>
          <div className="header">
            <h1 style={{textAlign: "end"}}>Be Aware</h1>
            <div className='pic-container-alt'>
              {/* <img src={selfImg} /> */}
              <object className='pic-content' data={aware} type='image/svg+xml' />
            </div>
            <div className='div-divider-alt'></div>
          </div>
          
        </div>

        
          
        

        <div className='main-grid'>
          <div className='header'>
            <h1>Be Present</h1>
            <div className='pic-container'>
              <object className='pic-content' data={presentHumans} type='image/svg+xml' />
            </div>
          </div>
          <div className="header-text">
            
            <p>Become more present in your everyday surroundings!</p>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

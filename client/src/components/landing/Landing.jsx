import React from 'react'
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';
import therapyHumaaans from '../../img/therapyHumaaans.svg';
import aware from '../../img/aware.svg';
import presentHumans from '../../img/presentHumans.svg';
import Footer from '../footer/Footer';
import '../../styles/Landing.css';

export const Landing = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="main-wrapper">
        <div className='main-grid'>
          <div className='header'>
            <h1
              style={{
                fontSize: '6rem'
              }}
            >MyAct</h1>
            <div className='pic-container'>
              <object className='pic-content' data={therapyHumaaans} type='image/svg+xml' />
            </div>
            <div className='div-divider' />
          </div>
          <div className="header-text">
            <div
              style={{
                display: 'flex',
                height: '50vh'
              }}
              className='header-text-container'
            >
              <p>Conduct<span style={{color: '#9747FF'}}>Acceptance</span> and<span style={{color: '#9747FF'}}>Committment</span> Therapy exercises from the comfort of your own home!</p>
            </div>
            
            <div className='btn-container'>
              <Button className='me-1' style={{width: "100%"}} onClick={() => navigate("/register")}>Sign Up!</Button>
              <Button className='ms-1' style={{width: '100%'}}
                onClick={() => navigate("/dashboard")}
              >Continue as a Guest!</Button>
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

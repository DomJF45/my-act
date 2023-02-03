import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import BreathingAnimation from './BreathingAnimation';
import '../../../styles/Breathing.css';
import { useContext } from 'react';
import { UserContext, UserContextProvider } from '../../../App';

const API_URL = '/api/breathing'

const Breathing = () => {

  const speedRef = useRef();
  const [startTimer, setStartTimer] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [showBreath, setShowBreath] = useState(false);
  const [finish, setFinish] = useState(false);
  const [counter, setCounter] = useState(60);
  const [endCounter, setEndCounter] = useState(8);
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const user = useContext(UserContext)
  
  
  const startExercise = () => {
    console.log(speedRef.current.value)
    setSpeed(speedRef.current.value)
    setCounter(60);
    setFinish(false);
    setStartTimer(true);
    setShowBreath(true);
  }

  

  console.log(user)
  
  useEffect(() => {

    // make API fetch here
    // data is ONLY breath speed, it is the same so need for holding, or breath out speed

    // mock fetch
    
    // setUser(JSON.parse(localStorage.getItem('user')));
    // setUser(UserContext.Provider._context._currentValue)

    const getData = async () => {
      try {
        const res = await axios.get(API_URL);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    }
    // setSpeed(getData);

    if (startTimer) {
      const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if (counter === 0) {
        setFinish(true);
        const endTimer = endCounter > 0 && setTimeout(() => setEndCounter(endCounter - 1), 1000);
        setShowBreath(false);
      }
    }

    console.log('render')

  }, [showBreath, counter])

  if (showBreath) {
    return (
      <BreathingAnimation speed={speed} counter={counter} showBreath={showBreath} setShowBreath={setShowBreath} />
    )
  }

  return (
    <div style={{
      height: 'calc(100vh - 4.75rem)'
    }}>
      <div className='bottom' style={{height: finish && '80vh'}}>
        <h2 style={showBreath || finish ? {display: 'none'} : {display: 'block'}}>Welcome {user?.name ? user?.name : 'Guest'}</h2>
        <div>
          { 
            finish && (

              <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}>
                <div>


                  <motion.p
                    className='done'
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease:'linear'}}
                  >All Done</motion.p>
                  <motion.div
                    style={{textAlign: 'center'}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1, x: [20, 0]}}
                    transition={{duration: 1, delay: .5, ease: 'linear'}}
                  >
                    <FontAwesomeIcon id='back-btn' onClick={() => navigate(-1)} color='#b989f9' size={'xl'} icon={faChevronCircleLeft} /><span style={{marginLeft: '.5rem'}} className='go-back'>Go Back</span>
                  </motion.div>
                </div>
              </div>
            )     
          }
        </div>
        
      </div>
      <div style={{height: finish ? '0':'80%'}}>

        <motion.div 
          className='container d-flex justify-content-center'
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: .5, }}
          style={showBreath || finish ? {display: 'none'} : {display: 'block'}}
        >
          
          <Card
            style={showBreath || finish ? {display: 'none'} : {
              display: 'block',
              textAlign: 'start'
            }}
            id='pref-card'
          >
            <Card.Body>
              <div id="pref-container" className='container ' style={showBreath || finish ? {display: 'none'} : {display: 'block'}}>
                <h3>Set your preferences!</h3>
                <Form id='start-form' onSubmit={startExercise}>
                  <div
                    style={{
                      width: '30%'
                    }}
                  >

                  
                    <Form.Group>
                      <Form.Label>Breath Speed</Form.Label>
                      <Form.Control ref={speedRef} defaultValue={speed} id='num-form' className='w-65' type='number' size={15} max={15} min={1}/>
                      <Form.Control.Feedback type='invalid'>
                        No values less than 1 or larger than 15
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </Form>
                <div className='btn-container justify-content-center' >
                  <Button type='submit' form='start-form'>Start Exercise!</Button>      
                </div>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Breathing
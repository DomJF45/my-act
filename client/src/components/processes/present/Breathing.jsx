import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import BreathingAnimation from './BreathingAnimation';
import '../../../styles/Breathing.css';

const Breathing = () => {

  const speedRef = useRef();
  const [startTimer, setStartTimer] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [showBreath, setShowBreath] = useState(false);
  const [finish, setFinish] = useState(false);
  const [counter, setCounter] = useState(60);
  const [endCounter, setEndCounter] = useState(8);
  const navigate = useNavigate();
  
  const startExercise = () => {
    console.log(speedRef.current.value)
    setSpeed(speedRef.current.value)
    setCounter(10);
    setFinish(false);
    setStartTimer(true);
    setShowBreath(true);
  }

  useEffect(() => {

    // make API fetch here

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
    <>
      <div className='bottom'>
        <div>
          { 
            finish && (

              <>
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
              </>
            )     
          }
        </div>
        
      </div>
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
            width: '60%',
            textAlign: 'start'
          }}
        
        >
          <Card.Body>
            <div id="pref-container" className='container ' style={showBreath || finish ? {display: 'none'} : {display: 'block'}}>
              <h3>Set your preferences!</h3>
              <Form id='start-form' onSubmit={startExercise}>
                <Form.Group>
                  <Form.Label>Breath Speed</Form.Label>
                  <Form.Control ref={speedRef} defaultValue={5} id='num-form' className='w-65' type='number' size={15} max={15} min={1} />
                  <Form.Control.Feedback type='invalid'>
                    No values less than 1 or larger than 15
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
              <div className='btn-container justify-content-center' >
                <Button type='submit' form='start-form'>Start Exercise!</Button>      
              </div>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </>
  )
}

export default Breathing
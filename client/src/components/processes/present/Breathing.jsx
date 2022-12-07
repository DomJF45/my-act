import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import BreathingAnimation from './BreathingAnimation';
import '../../../styles/Breathing.css';

const Breathing = () => {

  const [speed, setSpeed] = useState(5);
  const [showBreath, setShowBreath] = useState(false);
  const [finish, setFinish] = useState(false);
  const [counter, setCounter] = useState(20);
  const [endCounter, setEndCounter] = useState(8);
  
  useEffect(() => {

    const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setFinish(true);
      const endTimer = endCounter > 0 && setTimeout(() => setEndCounter(endCounter - 1), 1000);
      setShowBreath(false);
    }

  }, [showBreath, counter])

  if (showBreath) {
    return (
      <BreathingAnimation speed={speed} counter={counter} showBreath={showBreath} setShowBreath={setShowBreath} />
    )
  }

  return (
    <>
      <div className='bottom'>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '4rem'}}>
          { 
            finish && (
              <motion.p
                className='done'
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{duration: 1, ease:'linear'}}
              >All Done</motion.p>

            )     
          }
        </div>
        <div className='btn-container'>
          <Button style={showBreath || finish ? {display: 'none'} : {display: 'flex'}} onClick={() => setShowBreath(true)}>Start Exercise!</Button>      
        </div>
      </div>
    </>
  )
}

export default Breathing
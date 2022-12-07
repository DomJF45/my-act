import React from 'react'
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';

const BreathingAnimation = (props) => {
  return (
    <div className="exercise-container">
            <>
              <div className='circle-container'>
                <motion.div 
                  className='circle'
                  animate={{scale: 2}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'reverse'}}
                />
                <motion.div 
                  className='circle2'
                  animate={{scale: 1.8}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'reverse'}}
                />
                <motion.div 
                  className='circle3'
                  animate={{scale: 1.6}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'reverse'}}
                />
                <motion.div 
                  className='circle4'
                  animate={{scale: 1.4}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'reverse'}}
                />
                <motion.div 
                  className='circle5'
                  animate={{scale: 1.2}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'reverse'}}
                />
                
                <motion.p
                  className='breathe'
                  initial={{opacity: 0}}
                  animate={{opacity: [0, 1, 0]}}
                  transition={{duration: props.speed, repeat: 'Infinity', repeatType: 'ease', repeatDelay: props.speed}}
                >Breath In</motion.p>
                <motion.p
                  className='breathe'
                  initial={{opacity: 0}}
                  animate={{opacity: [0, 1, 0]}}
                  transition={{delay: props.speed, duration: props.speed, repeat: 'Infinity', repeatType: 'ease', repeatDelay: props.speed}}
                >Breath Out</motion.p>
                
                <motion.p>Finished</motion.p>
              </div>
              {/* <div className='breathing-footer'>
                <div className='btn-container'>
                  <Button variant='danger' onClick={() => props.setShowBreath(false)}>End Exercise!</Button>
                </div>
                <div className='timer-container'>
                  <p>Time Left: {props.counter}</p>
                </div>
              </div> */}
            </>
      </div>
  )
}

export default BreathingAnimation
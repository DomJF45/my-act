import React from 'react'
import { motion } from 'framer-motion';

interface Props {
  speed: number;
}

const BreathingAnimation = (props: Props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',  height: 'calc(100vh - 4.75rem)', width: '100%'}}>
      <div className='exercise-container'>
        <div className='circle-container'>
          <motion.div 
            className='circle'
            animate={{scale: 2}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'reverse'} as any}
          />
          <motion.div 
            className='circle2'
            animate={{scale: 1.8}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'reverse'} as any}
          />
          <motion.div 
            className='circle3'
            animate={{scale: 1.6}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'reverse'} as any}
          />
          <motion.div 
            className='circle4'
            animate={{scale: 1.4}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'reverse'} as any}
          />
          <motion.div 
            className='circle5'
            animate={{scale: 1.2}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'reverse'} as any}
          />
          
          <motion.p
            className='breathe'
            initial={{opacity: 0}}
            animate={{opacity: [0, 1, 0]}}
            transition={{duration: props.speed, repeat: Infinity, repeatType: 'ease', repeatDelay: props.speed} as any}
          >Breath In</motion.p>
          <motion.p
            className='breathe'
            initial={{opacity: 0}}
            animate={{opacity: [0, 1, 0]}}
            transition={{delay: props.speed, duration: props.speed, repeat: Infinity, repeatType: 'ease', repeatDelay: props.speed} as any}
          >Breath Out</motion.p>
          
          <motion.p>Finished</motion.p>
        </div>
      </div>
    </div>
  )
}

export default BreathingAnimation
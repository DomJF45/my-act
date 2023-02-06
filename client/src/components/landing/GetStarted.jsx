import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetStarted = () => {

  const navigate = useNavigate();
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true
  });
  
  return (
    <motion.div
      style={{
        width: '100%',
        marginBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      initial={{
        y: 80,
        opacity: 0
      }}
      animate={inView ? {
        y: 20,
        opacity: 1
      }:{
        y: 80,
        opacity: 0
      }}
      transition={{ duration: 1, ease: 'easeIn'}}
      ref={ref}
    >
      <a className='user-box' onClick={() => navigate('/dashboard')}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span style={{fontSize: '1.3rem'}}>Get Started</span>
        </div>
      </a>
    </motion.div>
  )
}

export default GetStarted
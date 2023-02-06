import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useScreenSize from '../../util/hooks/useScreenSize';

const SectionOne = ({ svg }) => {

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true
  }); 

  const window = useScreenSize();

  const distance = window.width > 1030 ? 100 : 30;

  return (
    <div className='text-left-header'>
      <motion.div
        initial={{
          x: -distance,
          opacity: 0,
          
        }}
        animate={inView ? {
          x: 0,
          opacity: 1,
          
        } : {
          x: -distance,
          opacity: 0,
          
        }}
        transition={{ duration: .5, ease: 'easeOut'}}
        ref={ref}
        style={{
          
        }}
      >
        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '300px',
            
          }}
        >
          <p style={{overflowX: 'hidden'}}><span style={{color: '#9747FF',overflowX: 'hidden' }}>Meditate</span> and <span style={{color: '#9747FF', overflowX: 'hidden'}}>Journal</span></p>
          <p style={{fontSize: '1rem',overflowX: 'hidden' }}>Practice mindfulness based techniques and engage with interactive exercises to develop a mindful attitude rooted in the present.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: distance,
          opacity: 0,
          
        }}
        animate={inView ? {
          x: 0,
          opacity: 1,
          
        } : {
          x: distance,
          opacity: 0,
          
        }}
        transition={{ duration: .5, ease: 'easeOut'}}
        ref={ref}
        style={{
          
        }}
      >
        <object data={svg} type='image/svg+xml' style={{width: '500px', zIndex: 40, overflowX: 'hidden'}} />
      </motion.div>
    </div>
  )
}

export default SectionOne
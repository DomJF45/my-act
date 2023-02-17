import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useScreenSize from '../../util/hooks/useScreenSize';

interface Props {
  svg: string
}

const SectionTwo = (props: Props) => {

  const window = useScreenSize();

  const distance: undefined | number = window.width! > 1030 ? 100 : 30

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true
  });

  return (
    <div className="text-right-header" id="text-right-h">
      
      <motion.div
        initial={{
          x: -distance,
          opacity: 0,
          
        }}
        animate={inView ? {
          x: 0,
          opacity: 1,
          
        }: {
          x: -distance,
          opacity: 0,
          
        }}
        transition={{ duration: .5, ease: 'easeOut'}}
        ref={ref}
        style={{
          overflowX: 'hidden'
        }}
      >
        <object data={props.svg} type='image/svg+xml' style={{width: '475px', zIndex: 2}} aria-labelledby='text-right-h' />
      </motion.div>
      <motion.div
        initial={{
          x: distance,
          opacity: 0,
          
        }}
        animate={inView ? {
          x: 0,
          opacity: 1,
          
        }: {
          x: distance,
          opacity: 0,
          
        }}
        transition={{ duration: .5, ease:'easeOut'}}
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
          <p style={{overflowX: 'hidden'}}><span style={{color: '#9747FF', overflowX: 'hidden'}}>Be</span> more <span style={{color: '#9747FF', overflowX: 'hidden'}}>Aware</span></p>
          <p style={{fontSize: '1rem', overflowX: 'hidden'}}>Build your awareness of the present moment with videos and resources about ACT therapy.</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionTwo
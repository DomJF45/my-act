import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Rectangle = () => {

  const rectangle: string = require('../../../img/shapes/rectangle.svg').default;

  const divRef = useRef(null);

  const { scrollY } = useScroll({ target: divRef})

  const y = useTransform(scrollY, [200, 700], [500, 0]);

  const {ref} = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  return (

   
    <div ref={divRef}>
      
      <motion.object 
        data={rectangle}
        style={{
          position: 'absolute',
          left: 0,
          width: '250px',
          bottom: '-15vh',
          y: y,
          zIndex: 1,
          overflowX: 'hidden',
        }}
        ref={ref}
        id="rectangle"
        
      />
    </div>
    
    
  )
}

export default Rectangle
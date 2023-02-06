import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const LandingTwo = () => {

  const parallax = useRef(null);

  return (
    <>
      <Parallax pages={1} style={{top: 0, left: 0}}>
        <ParallaxLayer offest={0}></ParallaxLayer>
      </Parallax>
    </>
  )
}

export default LandingTwo
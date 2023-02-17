import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import useScreenSize from '../../util/hooks/useScreenSize';


const Circle = () => {

  const circle: string = require("../../../img/shapes/circle.svg").default;
  const { scrollY } = useScroll();
  const window = useScreenSize();
  const y = useTransform(scrollY, [0, 300], [0, 180]);

  return (
    <>
      <motion.object
        data={circle}
        style={{
          position: 'absolute',
          right: window.width! > 1030 ? '-4vh' : 0,
          width: '180px',
          top: '8vh',
          rotate: '60deg',
          overflowX: 'hidden',
          y: y
        }}
        id="circle"
      />
    </>
  )
}

export default Circle
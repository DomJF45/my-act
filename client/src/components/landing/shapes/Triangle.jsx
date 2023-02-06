import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import useScreenSize from '../../util/hooks/useScreenSize';

const Triangle = ({ shape }) => {

  const { scrollY } = useScroll();
  const window = useScreenSize();
  const y = useTransform(scrollY, [0, 300], [0, -600]);

  return (
    <>
      <motion.object
        data={shape}
        style={{
          position: 'absolute',
          left: window.width > 1030 ? '-4vh' : '4vh',
          width: '180px',
          bottom: '-10vh',
          rotate: '60deg',
          y: y,
          overflowX: 'hidden',
        }}
        id="triangle"
      />
    </>
  )
}

export default Triangle
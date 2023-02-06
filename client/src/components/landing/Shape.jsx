import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Shape = ({ shape, right, left, bottom, top, rotate, first, second }) => {

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 180]);
  const y2 = useTransform(scrollY, [0, 300], [0, -600]);

  return (
    <>
      <motion.object
        data={shape}
        style={{
          position: 'absolute',
          right: right ? right : '',
          left: left ? left : '',
          width: '180px',
          bottom: bottom ? bottom : '',
          top: top ? top : '',
          rotate: '60deg',
          y: first ? y1 : y2
        }}
      />
    </>
  )
}

export default Shape
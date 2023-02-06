import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionThree = () => {

  const { ref, inView, entry } = useInView();

  return (
    <div>SectionThree</div>
  )
}

export default SectionThree
import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Done = () => {

  const navigate = useNavigate();

  return (
    <div style={{height: 'calc(100vh - 4.75rem)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div>
      <motion.p
        className='done'
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{duration: 1, ease:'linear'}}
      >All Done</motion.p>
      <motion.div
        style={{textAlign: 'center'}}
        initial={{opacity: 0}}
        animate={{opacity: 1, x: [20, 0]}}
        transition={{duration: 1, delay: .5, ease: 'linear'}}
      >
        <FontAwesomeIcon id='back-btn' onClick={() => navigate(-1)} color='#b989f9' size={'xl'} icon={faChevronCircleLeft} /><span style={{marginLeft: '.5rem'}} className='go-back'>Go Back</span>
      </motion.div>
      </div>
    </div>
  )
}

export default Done
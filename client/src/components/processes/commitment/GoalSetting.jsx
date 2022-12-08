import React, { useRef, useState } from 'react'
import '../../../styles/processes/Commitment.css';
import { Form, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import GoToExercise from '../../util/directory/GoToExercise';
import Next from '../../util/directory/Next';
import FormPage from './FormPage';


const GoalSetting = () => {

  const [form, setForm] = useState(1)
  const [formData, setFormData] = useState({})

  const immediateRef = useRef();
  const shortRef = useRef();
  const mediumRef = useRef();
  const longRef = useRef();

  const nextForm = (newDirection) => {
    setForm(form + 1);
  }

  const handleSubmit = (data) => {
    // const smartData = {
    //   well: [
    //     {
    //       category,
    //       data
    //     }
    //   ],
    //   needsImprovement: [
    //     {
    //       category,
    //       data
    //     }
    //   ],
    //   myGoals: [
    //     {
    //       category,
    //       data
    //     }
    //   ]
    // }    
    
  }

  console.log(form)

  let formRender;

  return (
    <>
    
    <div 
      className='container d-flex justify-content-center'
      style={{
        marginTop: '5rem'
      }}
    >
      <Card id='smart-card' className='w-50'>
        <Card.Body>
          <h1 className='text-center mt-5'>Lets do some goals!</h1>
          <motion.div
            key={form}
            initial={{x: 200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .3}}

          >
            <FormPage formId={form} handleSubmit={handleSubmit} setFormData={setFormData} />
          </motion.div>
        </Card.Body>
        <Card.Footer className='container d-flex justify-content-end'>
          <Next setForm={setForm} nextForm={form + 1}  />
        </Card.Footer>
      </Card>
    </div>
      
    </>
  )
}

export default GoalSetting
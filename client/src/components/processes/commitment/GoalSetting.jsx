import React, { useRef, useState } from 'react'
import '../../../styles/processes/Commitment.css';
import { Form, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import GoToExercise from '../../util/directory/GoToExercise';
import Next from '../../util/directory/Next';
import FormPage from './FormPage';


const GoalSetting = () => {

  const [form, setForm] = useState(1)
  const [formData, setFormData] = useState();
  const [formName, setFormName] = useState();

  const nextForm = (newDirection) => {
    setForm(form + 1);
  }

  const handleSubmit = (data) => {
    
    console.log(data);
    
  }

  return (
    <>
    
    <h1 className='text-center mt-5' style={{color: '#7a18fa'}}>Lets do some goals!</h1>
    <div 
      className='container d-flex justify-content-center'
      style={{
        marginTop: '5rem'
      }}
    >
      <Card id='smart-card' className='w-50 mb-5'>
        <Card.Body>
          <motion.div
            key={form}
            initial={{x: 200, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: .3}}
          >
            
            <FormPage formId={form} setFormData={setFormData} handleSubmit={handleSubmit} />

          </motion.div>
        </Card.Body>
      </Card>
    </div>
      
    </>
  )
}

export default GoalSetting
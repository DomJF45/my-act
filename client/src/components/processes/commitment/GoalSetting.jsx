import React, { useState } from 'react';
import '../../../styles/processes/Commitment.css';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import FormPage from './FormPage';
import Done from '../../util/directory/Done';
import axios from 'axios';

const API_URL = 'api/test'

const GoalSetting = () => {

  const [form, setForm] = useState(1)
  const [formData, setFormData] = useState();
  const [formName, setFormName] = useState();
  const [finished, setFinished] = useState(false);

  const nextForm = (newDirection) => {
    setForm(form + 1);
  }

  const handleSubmit = async (data) => {
    
    try {

      const res = await axios.post(API_URL, data)
      console.log(res);
    } catch (err) {
      console.log(err)
    }

    console.log(data);
    setFinished(true);

    
  }

  if (finished) {
    return (
      <Done />
    )
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
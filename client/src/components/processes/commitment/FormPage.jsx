import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../../styles/processes/Commitment.css';

const FormPage = ({ formId, handleSubmit, setFormData }) => {

  const [dataState, setDataState] = useState({
    familyWell: "",
    familyImp: "",
    familyGoal: "",
    friendsWell: "",
    friendsImp: "",
    friendsGoal: "",
    workWell: "",
    workImp: "",
    workGoal: "",
    spiritWell: "",
    spiritImp: "",
    spiritGoal: "",
    bodyWell: "",
    bodyImp: "",
    bodyGoal: "",
    mentalWell: "",
    mentalImp: "",
    mentalGoal: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setDataState({
      ...dataState,
      [e.target.name]: value
    })
  }
 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    handleSubmit(dataState);
  }

  return (
    <Form id='smart-from' onSubmit={handleFormSubmit}>
    <Form.Group>
        <div>

          <div className='form-container'>
            <h3>Family: </h3>
            <Form.Label  id='well' value={dataState.familyWell}>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control name="familyWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label value={dataState.familyImp}>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control name="familyImp"onChange={handleChange} className='mb-3' type='text' placeholder='' />
            <Form.Label  value={dataState.familyGoal}>
              <h5 className='lead'>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control name="familyGoal" onChange={handleChange} type='text' className='mb-3' />
          </div>
        </div>


          <div className='form-container'
          
          >
            
            <h3>Friends: </h3>
            <Form.Label value={dataState.friendsWell}>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control name="friendsWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label  value={dataState.friendsImp}>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control name="friendsImp" onChange={handleChange} className='mb-3' type='text' placeholder='' />
            <Form.Label  value={dataState.friendsGoal}>
              <h5 className='lead'>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control name="friendsGoal" onChange={handleChange} type='text' className='mb-3' />
          </div>


              <div className='form-container'
       
        >
          <h3>Work/School: </h3>
          <Form.Label  value={dataState.workWell}>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control name="workWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label value={dataState.workImp}>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control name="workImp"onChange={handleChange} className='mb-3' type='text' placeholder='' />
          <Form.Label value={dataState.workGoal}>
            <h5 className='lead'>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control name="workGoal" onChange={handleChange} type='text' className='mb-3' />
        </div>


        <div className='form-container'
          >
            <h3>Spirituality: </h3>
            <Form.Label  value={dataState.spiritWell}>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control name="spiritWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label  value={dataState.spiritImp}>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control name="spiritImp" onChange={handleChange} className='mb-3' type='text' placeholder='' />
            <Form.Label  value={dataState.spiritGoal}>
              <h5 className='lead'>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control name="spiritGoal" onChange={handleChange} type='text' className='mb-3' />
          </div>


        <div className='form-container'
        
        >
          <h3>Body:</h3>
          <Form.Label  value={dataState.bodyWell}>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control name="bodyWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label  value={dataState.bodyImp}>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control name='bodyImp' onChange={handleChange} className='mb-3' type='text' placeholder='' />
          <Form.Label  value={dataState.bodyGoal}>
            <h5 className='lead'>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control name="bodyGoal" onChange={handleChange} type='text' className='mb-3' />
        </div>


        <div className='form-container'
        
        >
          <h3>Mental Health: </h3>
          <Form.Label  value={dataState.mentalWell}>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control name="mentalWell" onChange={handleChange} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label  value={dataState.mentalImp}>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control name="mentalImp" onChange={handleChange}  className='mb-3' type='text' placeholder='' />
          <Form.Label  value={dataState.mentalGoal}>
            <h5 className='lead'>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control name="mentalGoal" onChange={handleChange} type='text' className='mb-3' />
          <Button type='submit'>Submit</Button>
        </div>
        </Form.Group>
      </Form>
  )
}

export default FormPage
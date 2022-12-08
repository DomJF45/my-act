import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react'
import { Form } from 'react-bootstrap';

const FormPage = ({ formId, handleSubmit, setFormData }) => {

  const faWellRef = useRef();
  const faImpRef = useRef();
  const faGoalRef = useRef();

  const frWellRef = useRef();
  const frImpRef = useRef();
  const frGoalRef = useRef();

  const wsWellRef = useRef();
  const wsImpRef = useRef();
  const wsGoalRef = useRef();

  const spWellRef = useRef();
  const spImpRef = useRef();
  const spGoalRef = useRef();

  const boWellRef = useRef();
  const boImpRef = useRef();
  const boGoalRef = useRef();

  const mhWellRef = useRef();
  const mhImpRef = useRef();
  const mhGoalRef = useRef();

 
  const handleDataSubmit = (e) => {
    const family = {
      well: faWellRef.current.value,
      improvement: faImpRef.current.value,
      goals: faGoalRef.current.value
    }
    const friends = {
      well: frWellRef.current.value,
      improvement: frImpRef.current.value,
      goals: frGoalRef.current.value
    }
    const workOrSchool = {
      well: wsWellRef.current.value,
      improvement: wsImpRef.current.value,
      goals: wsGoalRef.current.value
    }
    const sprituality = {
      well: spWellRef.current.value,
      improvement: spImpRef.current.value,
      goals: spGoalRef.current.value
    }
    const body = {
      well: boWellRef.current.value,
      improvement: boImpRef.current.value,
      goals: boGoalRef.current.value
    }
    const mentalHealth = {
      well: mhWellRef.current.value,
      improvement: mhImpRef.current.value,
      goals: mhGoalRef.current.value
    }
    const goalData = {
      family,
      friends,
      workOrSchool,
      sprituality,
      body,
      mentalHealth
    }

    handleSubmit(goalData);

  }
  

  return (
    <Form id='smart-from' onSubmit={handleSubmit(handleDataSubmit)}>
      <Form.Group>
        <div>

          <div className='form-container' style={
            formId === 1 ? {display: 'block'} : {display: 'none'}
          }>
            <h3>Family: </h3>
            <Form.Label>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control ref={faWellRef} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control ref={faImpRef} className='mb-3' type='text' placeholder='' />
            <Form.Label>
              <h5>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control ref={faGoalRef} type='text' className='mb-3' />
          </div>
        </div>


          <div className='form-container'
          style={
            formId === 2 ? {display: 'block'} : {display: 'none'}
          }
          >
            <h3>Friends: </h3>
            <Form.Label>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control ref={frWellRef} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control ref={frImpRef} className='mb-3' type='text' placeholder='' />
            <Form.Label>
              <h5>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control ref={frGoalRef} type='text' className='mb-3' />
          </div>


              <div className='form-container'
        style={
          formId === 3 ? {display: 'block'} : {display: 'none'}
        }
        >
          <h3>Work/School: </h3>
          <Form.Label>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control ref={wsWellRef} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control ref={wsImpRef} className='mb-3' type='text' placeholder='' />
          <Form.Label>
            <h5>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control ref={wsGoalRef} type='text' className='mb-3' />
        </div>


        <div className='form-container'
          style={
            formId === 4 ? {display: 'block'} : {display: 'none'}
          }>
            <h3>Spirituality: </h3>
            <Form.Label>
              <h5 className='lead'>What I'm Doing Well</h5>
              <p className='form-example'>Examples here</p>
            </Form.Label>
            <Form.Control ref={spWellRef} className='mb-3' type='text' placeholder='Type here' />
            <Form.Label>
              <h5 className='lead'>Where I Need Improvement</h5>
              <p className='form-example'>Things I can do over the next few days and weeks</p>  
            </Form.Label>
            <Form.Control ref={spImpRef} className='mb-3' type='text' placeholder='' />
            <Form.Label>
              <h5>My Goals</h5>
              <p className='form-example'>SMART Goals</p>
            </Form.Label>
            <Form.Control ref={spGoalRef} type='text' className='mb-3' />
          </div>


        <div className='form-container'
        style={
          formId === 5 ? {display: 'block'} : {display: 'none'}
        }
        >
          <h3>Body:</h3>
          <Form.Label>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control ref={boWellRef} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control ref={boImpRef} className='mb-3' type='text' placeholder='' />
          <Form.Label>
            <h5>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control ref={boGoalRef} type='text' className='mb-3' />
        </div>


        <div className='form-container'
        style={
          formId === 6 ? {display: 'block'} : {display: 'none'}
        }
        >
          <h3>Mental Health: </h3>
          <Form.Label>
            <h5 className='lead'>What I'm Doing Well</h5>
            <p className='form-example'>Examples here</p>
          </Form.Label>
          <Form.Control ref={mhWellRef} className='mb-3' type='text' placeholder='Type here' />
          <Form.Label>
            <h5 className='lead'>Where I Need Improvement</h5>
            <p className='form-example'>Things I can do over the next few days and weeks</p>  
          </Form.Label>
          <Form.Control ref={mhImpRef} className='mb-3' type='text' placeholder='' />
          <Form.Label>
            <h5>My Goals</h5>
            <p className='form-example'>SMART Goals</p>
          </Form.Label>
          <Form.Control ref={mhGoalRef} type='text' className='mb-3' />
        </div>


      </Form.Group>
    </Form>
  )
}

export default FormPage
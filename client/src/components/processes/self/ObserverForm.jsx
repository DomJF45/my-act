import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const ObserverForm = ({ setFinished }) => {

  const [dataState, setDataState] = useState({
    emotion: '',
    story: '',
    values: '',
    act: '',
    basedAction: ''
  })

  const handleChange = (e) => {

    const value = e.target.value;

    setDataState({
      ...dataState,
      [e.target.name]: value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataState);

    setFinished(true);
  }

  return (
    <Card id='smart-card' className='w-50 m-0 p-3'>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div className='form-container'>
            <Form.Label value={dataState.emotion}>
              <h3 style={{color: '#7a18fa'}}>Emotion</h3>
              <p className='form-example'>(Peaceful, calm, angry, frustrated, guilty, jealous, sad, melancholy, nostalgic, happy, excited, etc.)</p>
            </Form.Label>
            <Form.Control name='emotion' onChange={handleChange} type='text'  className='mb-3' as='textarea' />
            <Form.Label value={dataState.story}>
              <h3 style={{color: '#7a18fa'}}>Story</h3>
              <p className='form-example'>(I’m still not doing what I want to be doing right now, I am so blessed I had the best morning, I can’t believe that happened again)</p>
            </Form.Label>
            <Form.Control name='story' onChange={handleChange} type='text'  className='mb-3' as='textarea' />
            <Form.Label value={dataState.values}>
              <h3 style={{color: '#7a18fa'}}>Values</h3>
              <p className='form-example'> (Using should, comparing current self with a previous or future self, devaluing the moment)</p>
            </Form.Label>
            <Form.Control name='values' onChange={handleChange} type='text'  className='mb-3' as='textarea' />
            <Form.Label value={dataState.act}>
              <h3 style={{color: '#7a18fa'}}>ACT Defusion</h3>
              <p className='form-example'>(Noticing the thought or imagining it taking a back seat) or CBT Challenging the Thought (what are the facts)</p>
            </Form.Label>
            <Form.Control name='act' onChange={handleChange} type='text'  className='mb-3' as='textarea' />
            <Form.Label value={dataState.basedAction}>
              <h3 style={{color: '#7a18fa'}}>Values Based on Action or Thought</h3>
              <p className='form-example'> (Right now, I am honoring my values by. . .)</p>
            </Form.Label>
            <Form.Control name="basedAction" onChange={handleChange} type='text'  className='mb-3' as='textarea' />
            <Button type='submit' style={{
            backgroundColor: '#7a18fa',
            border: '1px #7a18fa',
            width: '100%',
            marginTop: '1rem'
          }}>Submit</Button>
          </div>
        </Form.Group>
      </Form>
    </Card>
  )
}

export default ObserverForm
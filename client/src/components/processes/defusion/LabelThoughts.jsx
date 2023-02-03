import React, { useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Done from '../../util/directory/Done';

const LabelThoughts = () => {

  const [finished, setFinished] = useState(false);
  const [form, newForm] = useState([
    {thought: 'n/a', label: 'n/a'}
  ]);

  const handleFormChange = (index, e) => {
    let data = [...form];
    data[index][e.target.name] = e.target.value;
    newForm(data);
  }

  const addFields = () => {
    let newField = {thought: 'n/a', label: 'n/a'}
    newForm([...form, newField]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // handle post request here
    
    console.log(form);
    setFinished(true);
  }

  // make GET req here
  useEffect(() => {
    
    // setState(getData) to save the data
  })

  if (finished) {
    return (
      <Done />
    )
  }

  return (
    <div className='container d-flex justify-content-center mt-5'>
      <Card id='smart-card' className='w-50 mb-5'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              {form.map((field, index) => {
                return (
                  <>
                    <Form.Label value={field.label}>
                    <h3 style={{color: '#7a18fa'}}>Thought:</h3>
                    </Form.Label>
                    <Form.Control name='thought' onChange={(e) => handleFormChange(index, e)} type='text' as='textarea' className='mb-3' />
                    <Form.Label value={field.thought}>
                    <h3 style={{color: '#7a18fa'}}>Label:</h3>
                    </Form.Label>
                    <Form.Control name='label' onChange={(e) => handleFormChange(index, e)} type='text' as='textarea' className='mb-3' />
                  </>
                )
              })}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '45% 45%',
                  gridGap: '10%',
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <Button id='submit-btn' className='w-100' type='submit'>Submit</Button>
                <Button
                style={{
                  justifySelf: 'end'
                }}
                id='add-btn' className='w-50 float-right' onClick={addFields}>+</Button>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LabelThoughts
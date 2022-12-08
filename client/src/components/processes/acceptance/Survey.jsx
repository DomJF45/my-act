import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap';


const questionsFromBackend = [
  {q: 'My painful experiences and memories make it difficult for me to live a life that I would value.'},
  {q: 'I\'m afraid of my feelings.'},
  {q: 'I worry about not being able to control my worries and feelings.'},
  {q: 'My painful memories prevent me from having a fulfilling life.'},
  {q: 'Emotions cause problems in my life.'},
  {q: 'It seems like most people are handling their lives better than I am.'},
  {q: 'Worries get in the way of my success.'}
]

const optionsFromBackend = [
  {opt: '1: never true'},
  {opt: '2: very seldom true'},
  {opt: '3: seldom true'},
  {opt: '4: sometimes true'},
  {opt: '5: frequently true'},
  {opt: '6: almost always true'},
  {opt: '7: always true'}
]

const Survey = () => {

  const [check, setCheck] = useState(0);
  const [questions, setQuestions] = useState(questionsFromBackend);
  const [likertOptions, setLikertOptions] = useState(optionsFromBackend);
  
  const [answers, setAnswers] = useState([
    {question: '', answer: ''}
  ])

  const handleChange = (index, e) => {
    setAnswers([
      ...answers,
      {question: e.target.name, answer: e.target.value}
    ])

   
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  }

  return (
    <>
      <div className='container d-flex justify-content-center'>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                {questions.map((question, index) => {
                  return (
                    <>
                      <Form.Label key={index} value={answers}>{question.q}</Form.Label>
                      <div className='container d-flex justify-content-center'>
                        <Form.Select name={index} className='mb-3' onChange={(e) => handleChange(index, e)}>
                          {likertOptions.map((option, index) => {
                            return (
                              <option key={index} value={index}>{option.opt}</option>
                            )
                          })}
                        </Form.Select>
                      </div>
                    </>
                  )
                })}
                <Button type='submit' style={{
                  backgroundColor: '#7a18fa',
                  border: '1px #7a18fa',
                  width: '100%',
                  marginTop: '1rem'
                }}>Submit</Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Survey
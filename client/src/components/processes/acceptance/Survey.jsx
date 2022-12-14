import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Done from '../../util/directory/Done';

// API url here
const API_URL = '/api/survey'

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

  const userIdTest = '12345';

  const [check, setCheck] = useState(0);
  const [questions, setQuestions] = useState(questionsFromBackend);
  const [likertOptions, setLikertOptions] = useState(optionsFromBackend);
  const [finished, setFinished] = useState(false);


  const [answers, setAnswers] = useState([
    {question: '', answer: ''}
  ])

  const handleChange = (index, e) => {
    setAnswers([
      ...answers,
      {question: e.target.name, answer: e.target.value}
    ])

   
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const field_one = answers[1]?.answer ? answers[1].answer : 'n/a';
    const field_two = answers[2]?.answer ? answers[2].answer : 'n/a';
    const field_three = answers[3]?.answer ? answers[3].answer : 'n/a';
    const field_four = answers[4]?.answer ? answers[4].answer : 'n/a';
    const field_five = answers[5]?.answer ? answers[5].answer : 'n/a';
    const field_six = answers[6]?.answer ? answers[6].answer : 'n/a';
    const field_seven = answers[7]?.answer ? answers[7].answer : 'n/a';

    const data = {
      field_one,
      field_two,
      field_three,
      field_four,
      field_five,
      field_six,
      field_seven,
      userIdTest
    }

    console.log(data);

    try {
      const res = await axios.post(API_URL, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }


    /**
     * Handle POST here
     * fields: {
     *  userId,
     *  q1 and answer
     *  q2 and answer
     *  ...
     *  q7 and answer  
     * }
     */

    /**
     * data looks like: 
     * 0{question: 1, answer: 'string'}, 
     * 1{question: 2, answer: 'string'}, 
     * ... 
     * 7{question: 7, answer: 'string'}
     */


    setFinished(true);

  }

  if (finished) {
    return (
      <Done />
    )
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
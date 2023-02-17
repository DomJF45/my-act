import React, { useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap';
import Done from '../../util/directory/Done';

interface iQuestion {
  q: string
}

interface iOption {
  opt: string
}

const questionsFromBackend: iQuestion[] = [
  {q: 'My painful experiences and memories make it difficult for me to live a life that I would value.'},
  {q: 'I\'m afraid of my feelings.'},
  {q: 'I worry about not being able to control my worries and feelings.'},
  {q: 'My painful memories prevent me from having a fulfilling life.'},
  {q: 'Emotions cause problems in my life.'},
  {q: 'It seems like most people are handling their lives better than I am.'},
  {q: 'Worries get in the way of my success.'}
]

const optionsFromBackend: iOption[] = [
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


  const [questions, setQuestions] = useState(questionsFromBackend);
  const [likertOptions, setLikertOptions] = useState(optionsFromBackend);
  const [finished, setFinished] = useState(false);


  const [answers, setAnswers] = useState([
    {question: '', answer: ''}
  ])

  const handleChange = (index: any, e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswers([
      ...answers,
      {question: e.currentTarget.name, answer: e.currentTarget.value}
    ])

   
  }
  
  const handleSubmit = async (e: React.SyntheticEvent) => {
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
                      <Form.Label name={index} key={index} value={answers}>{question.q}</Form.Label>
                      <div className='container d-flex justify-content-center'>
                        <Form.Select className='mb-3' onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(index, e)}>
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
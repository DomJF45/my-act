import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../styles/Register.css'

const Login = () => {

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    // e.preventDefault();

    // const userData = {
    //   email: emailRef.current.value,
    //   password: passRef.current.value,
    // }

    // console.log(userData);

    /**
     * handle login post here
     * fields: email, password
     */

  }

  return (
    <>
      <div className='card-container'>
        <Card style={{marginTop: "5rem"}}>
          <Card.Header>
            <h1 style={{textAlign: "center"}}>Login</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} id='form-id'>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" className="mb-4" />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className="mb-4" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">

              <Button type='submit' form='form-id' style={{width: "100%"}}>Submit</Button>
            </div>
            <div className='d-flex justify-content-center mt-3'>

              <p>Don't Have an Account? <Link to="/register">Sign Up</Link></p>
            </div>
          </Card.Footer>
        </Card>
      </div>
      
    </>
  )
}

export default Login
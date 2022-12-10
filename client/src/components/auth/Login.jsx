import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../styles/Register.css'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const API_URL = '/api/users/login'

const Login = ({ setUser }) => {

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    }

    console.log(userData);

    /**
     * handle login post here
     * fields: email, password
     */

    try {
      const login = await axios.post(API_URL, userData);
      setUser(login);
      localStorage.setItem('user', JSON.parse(login));
      navigate('/dashboard');
    } catch (err) {
      console.log(err)
    }

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
                <Form.Control type="email" className="mb-4" ref={emailRef} />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className="mb-4" ref={passRef} />
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
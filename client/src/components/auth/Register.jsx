import React, { useRef } from 'react';
import Navigation from '../Navbar/Navigation';
import { Link } from 'react-router-dom';
import ErrorToast from '../util/toasts/ErrorToast';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../styles/Register.css'
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Register = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passRef.current.value !== confirmPassRef.current.value) {
      const message = 'Passwords do not match';
      toast.error(message);
      
    } else {
      const userData = {
        name: nameRef.current.value,
        emailRef: emailRef.current.value,
        passRef: passRef.current.value,
        confirmPassRef: confirmPassRef.current.value
      }
  
      console.log(userData);
    }


  }

  return (
    <>
      <Navigation />
      <div className='card-container'>
        <Card style={{marginTop: "5rem"}}>
          <Card.Header>
            <h1 style={{textAlign: "center"}}>Register</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} id='form-id'>
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" className="mb-4" ref={nameRef} />
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" className="mb-4" ref={emailRef} />
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className="mb-4" ref={passRef} />
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" className="mb-4" ref={confirmPassRef} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-center">
              <Button type='submit' form='form-id' style={{width: "100%"}}>Submit</Button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
              <p>Already Have an Account? <Link to="/login">Log In</Link></p>
            </div>
          </Card.Footer>
        </Card>
      </div>
      
    </>
  )
}

export default Register
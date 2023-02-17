import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../styles/Register.css';

const Register = () => {
  
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [formUserType, setFormUserType] = useState('Basic User');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  // const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (userPassword !== confirmPass) {
      const message = 'Passwords do not match';
      toast.error(message);
      
    } else {

      const userData = {
        name: userName,
        email: userEmail,
        userType: formUserType,
        password: userPassword,
      }

      /**
       * Post user data here
       * fields: name, email, password, contributer
      */
     
      console.log(userData);
    }
  }

  return (
    <>
      <div className='card-container'>
        <Card style={{marginTop: "5rem"}}>
          <Card.Header>
            <h1 style={{textAlign: "center"}}>Register</h1>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} id='form-id'>
              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" className="mb-4" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" className="mb-4" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <Form.Label>Choose your Credentials</Form.Label>
                <Form.Select value={formUserType} onChange={(e) => setFormUserType(e.target.value)}>
                  <option value={'Basic User'}>Basic User</option>
                  <option value={'Therapist'}>Therapist</option>
                </Form.Select>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className="mb-4" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" className="mb-4" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
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
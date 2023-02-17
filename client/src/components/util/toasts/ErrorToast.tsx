import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';

interface Props {
  message: string;
}

const ErrorToast = (props: Props) => {
  return (
    <ToastContainer position='top-end'>
      <Toast bg='danger'>
        <Toast.Header>
          <strong className='me-auto'>MyAct</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ErrorToast
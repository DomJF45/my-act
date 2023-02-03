import React from 'react'
import { Container } from 'react-bootstrap'
import GoBack from '../util/directory/GoBack'

const Events = () => {
  return (
    <>
      <Container>
        <GoBack page={'/dashboard'} />
        <h1>Events Works!</h1>
      </Container>
    </>
  )
}

export default Events
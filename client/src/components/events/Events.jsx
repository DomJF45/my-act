import React from 'react'
import { Container } from 'react-bootstrap'
import FullNavbar from '../navbar/FullNavbar'
import GoBack from '../util/back/GoBack'

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
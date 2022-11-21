import React from 'react'
import { Container } from 'react-bootstrap'
import GoBack from '../util/back/GoBack'

const UserInfo = () => {
  return (
    <>
      <Container>
        <GoBack page={'/dashboard'} />
        <h1>User Info Works!</h1>
      </Container>
    </>
  )
}

export default UserInfo
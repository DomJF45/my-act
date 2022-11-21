import React from 'react'
import { useNavigate } from 'react-router'
import eventsImg from '../../../img/events_img.png'
import '../../../styles/Card.css'

const EventCard = () => {

  const navigate = useNavigate();

  return (
    <>
      <a className="card-box" onClick={() => navigate('events')}>
        <p>Events</p>
        <div>
          <img className="card-img" src={eventsImg} />
        </div>
      </a>
    </>
  )
}

export default EventCard
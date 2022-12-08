import React from 'react'
import { Link } from 'react-router-dom'
import GoToExercise from '../../util/directory/GoToExercise'
import YoutubeEmbed from '../../util/video/YoutubeEmbed'

const Values = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Values</h1>
      </div>
      <div className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"tg83qoaxz04"} />
        </div>
        <div className='content mt-3'>
          <h3>All about Values:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <GoToExercise page='card-sort' />
      </div>
    </>
  )
}

export default Values
import React from 'react'
import GoToExercise from '../../util/directory/GoToExercise'
import YoutubeEmbed from '../../util/video/YoutubeEmbed'

const Commitment = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Commitment</h1>
      </div>
      <div className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"uDLMaPG2Ock"} />
        </div>
        <div className='content'>
          <h3>All about Commitment:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <GoToExercise page='goal-setting' />
      </div>
    </>
  )
}

export default Commitment
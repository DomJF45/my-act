import React from 'react'
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../../util/video/YoutubeEmbed'
import '../../../styles/processes/Present.css';
import { Button } from 'react-bootstrap';

const Present = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Present</h1>
      </div>
      <div className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"7MM6KcvAwoY"} />
        </div>
        <div className='content'>
          <h3>All about the Present:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <h3>Click <Link to="breathing">here</Link> to do a Breathing Exercise!</h3>
          
        </div>
      </div>
      
    </>
  )
}

export default Present
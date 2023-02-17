import React from 'react'
import YoutubeEmbed from '../../util/video/YoutubeEmbed'
import GoToExercise from '../../util/directory/GoToExercise';
import GoBack from '../../util/directory/GoBack';

const Self = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Self</h1>
      </div>
      <div id='process-container' className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"kbarzx9AQmc"} />
        </div>
        <div className='mt-3' style={{height: '100vh'}}>
          <h3>All about the Self:</h3>
          <p>Self in ACT is defined as a perspective for one to be aware of one’s own “flow” while the concept of responsibility or attachment is observed contextually and without judgment / emotion. The concept of self is meant to be rigid and through a plethora of emotions, nothing can change the self. It is often used in metaphors as a comparison to the sky; even when there are clouds and storms, the sky will always be there. The self is no different.</p>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <GoBack page={'-1'} />
            <GoToExercise page='the-observing-self' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Self
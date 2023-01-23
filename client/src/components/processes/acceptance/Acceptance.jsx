import React from 'react'
import YoutubeEmbed from '../../util/video/YoutubeEmbed'
import GoToExercise from '../../util/directory/GoToExercise';
import GoBack from '../../util/directory/GoBack';

const Acceptance = () => {
  return (
    <>
      <div id='back-dir' className='container'>
        <GoBack page={-1} />
      </div>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Acceptance</h1>
      </div>
      <div id='process-container' className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"uDLMaPG2Ock"} />
        </div>
        <div className='content' style={{marginTop: '3rem'}}>
          <h3>All about Acceptance:</h3>
          <p>Acceptance is an individual's willingness to understand that negative events have happened and to be aware and embrace them. In essence, an individual will open themselves up to negative emotions and accept that they are present, rather than pushing them away. This allows individuals to accept negative emotions as thoughts so they can move past them easily.</p>
        </div>
        <GoToExercise page="acceptance-survey" />
      </div>
    </>
  )
}

export default Acceptance
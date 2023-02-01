import React from 'react'
import GoToExercise from '../../util/directory/GoToExercise'
import YoutubeEmbed from '../../util/video/YoutubeEmbed'
import GoBack from '../../util/directory/GoBack'
const Commitment = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Commitment</h1>
      </div>
      <div id="process-container" className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"i6SlZEzKSNg"} />
        </div>
        <div className='mt-3' style={{height: '100vh'}}>
          <h3>All about Commitment:</h3>
          <p>Commitment within the ACT framework is comprised of all core components and is the culmination of an individuals work within ACT. Commitment is a stage where an individual commits to actions that help them facilitate their experience and embrace change. An individual will actively engage in moving towards what they care about despite the presence of obstacles. </p>
          <div style={{display: 'flex', alignItems: 'center'}}>

            <GoBack page={-1} />
            <GoToExercise page='goal-setting' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Commitment
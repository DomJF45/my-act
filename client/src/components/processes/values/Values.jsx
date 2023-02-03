import React from 'react';
import GoBack from '../../util/directory/GoBack';
import GoToExercise from '../../util/directory/GoToExercise';
import YoutubeEmbed from '../../util/video/YoutubeEmbed';
import '../../../styles/processes/Present.css';

const Values = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Values</h1>
      </div>
      <div id="process-container" className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"tg83qoaxz04"} />
        </div>
        <div className='mt-3' style={{height: '100vh'}}>
          <h3>All about Values:</h3>
          <p>Values are qualities chosen by an individual that consist of purposive action. These values are not to be looked at as objects, but rather areas of life that are instantiated moment by moment. These values are dynamic, evolving patterns of activity that act as reinforcers for intrinsic activities. Think of values as an inner compass that guide individuals in a direction they want to go.</p>
          <p>Exercises involving the construction and adherence to values commonly involve construction of lists that access an individual's values. Some techniques may have a pre-selected list of values to which the individual will rank most important to least important.</p>
        
          <div style={{display: 'flex', alignItems: 'center'}}>
            <GoBack page={-1} />
            <GoToExercise page='card-sort' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Values
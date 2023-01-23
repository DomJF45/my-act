import React from 'react'
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../../util/video/YoutubeEmbed'
import '../../../styles/processes/Present.css';
import { Button } from 'react-bootstrap';
import GoBack from '../../util/directory/GoBack';
import GoToExercise from '../../util/directory/GoToExercise';

const Present = () => {
  return (
    <>
      <div id='back-dir' className='container'>
        <GoBack page={-1} />
      </div>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Present</h1>
      </div>
      <div id="process-container" className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"7MM6KcvAwoY"} />
        </div>
        <div className='content mt-3'>
          <h3>All about the Present:</h3>
          <p>Being present in ACT promotes non-judgemental and continuous interactions with psychological and environmental events as they occur. Being present is the process of becoming attuned to what is occurring in the present moment. The goal is to experience the world directly, and objectively, so that behavior can be flexible and thus actions are consistent with personal values.</p>
          <p>Mindfulness and Presentness exercises usually promote a meditative-like state where one notices the small things around oneself such as sights, smells, sounds, and sensations. After this mindfulness of the present moment has been achieved, the person can then view memories and thoughts as objective instances of the mind, whereas normally a person might feel responsible for their thoughts of the past and the future. </p>
        </div>
        <GoToExercise page='breathing' />
      </div>
      
    </>
  )
}

export default Present
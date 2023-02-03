import React from 'react';
import YoutubeEmbed from '../../util/video/YoutubeEmbed';
import GoToExercise from '../../util/directory/GoToExercise';
import GoBack from '../../util/directory/GoBack';

const Defusion = () => {
  return (
    <>
      <div id="title-container" className='container d-flex justify-content-center mt-5'>
        <h1>Defusion</h1>
      </div>
      <div id="process-container" className='container'>
        <div className='video-container'>
          <YoutubeEmbed embedId={"Eq6xkM01GZI"} />
        </div>
        <div className='mt-3' style={{height: '100vh'}}>
          <h3>All about Defusion:</h3>
          <p>Cognitive defusion involves framing undesirable thoughts through a different perspective. Rather than try to alter the form, frequency, or sensitivity, frame the thought through a different perspective such as viewing the thought as a scientist or by giving the thoughts colors, sizes, etc. By perceiving negative thoughts through a different “lens”, the individual can then “detach” themselves from negative thoughts and view it objectively without emotions.</p>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <GoBack page={-1} />
            <GoToExercise page='label-thoughts' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Defusion
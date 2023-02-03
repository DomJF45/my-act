import React, { useState } from 'react'
import ObserverForm from './ObserverForm'
import '../../../styles/processes/Self.css';
import Done from '../../util/directory/Done';

const ObservingSelf = () => {

  const [finished, setFinished] = useState(false);

  if (finished) {
    return (
      <Done />
    )
  }

  return (
    <>
      <div id='self-exercise' className='container w-50 mt-5'>
        <h1 style={{color: "#7a18fa", textAlign: 'center', marginBottom: '2rem'}}>The Observing Self</h1>
        <p>Getting Present in the Moment by focusing on the Senses: Take a deep breath, filling your belly, and keep breathing comfortably. Notice three
        sounds, three things you see, something you taste and smell, three things you feel on your body. Notice your body sensations, your heartrate.
        Notice your emotions. Notice your thoughts.</p>
        <p className='lead mb-2'>What did you notice?</p>
        <div id='obs-divider' style={{
          height: '1px',
          backgroundColor: '#303030',
          padding: 0,
          margin: 0
        }} />
        <p className='mt-3'>Below, complete the form to begin to notice some of the stories that may be associated with your ego or conceptualized self. The last two
        columns offer the opportunity to begin to change your response to your ego or conceptualized self.</p>
      </div>
      <div className='container d-flex justify-content-center p-0'>
        <ObserverForm setFinished={setFinished} />
      </div>
    </>
  )
}

export default ObservingSelf
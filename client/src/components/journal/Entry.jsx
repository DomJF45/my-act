import React from 'react';
import { useNavigate } from 'react-router';
import { BiRadioCircleMarked } from 'react-icons/bi';
import MoodIcon from './MoodIcon';

const Entry = ({ entry }) => {

  const navigate = useNavigate();

  return (
    <a className='entry' onClick={() => navigate(`post/${entry.id}`)}>
      <div className='entry-ribbon'>
        <div style={{width: '90%', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>  
          <div style={{display: 'flex'}}>
            <BiRadioCircleMarked size={25} />
            <p style={{marginLeft: '1rem', padding: 0, marginBlock: 0}}>{entry.date}</p>
          </div>
          <div style={{textAlign: 'end'}}>
            <MoodIcon mood={entry.mood} />
          </div>
        </div>
      </div>
      <div className='entry-title'>
        <h2>{entry.title}</h2>
      </div>
    </a>
  )
}

export default Entry
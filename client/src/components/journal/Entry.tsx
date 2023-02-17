import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import useEllipses from '../util/hooks/useEllipses';
import MoodIcon from './MoodIcon';
import DeleteModal from './modal/DeleteModal';
import { iJournal } from './journalData';

interface Props {
  entry: iJournal;
}

const Entry = (props: Props) => {

  const navigate = useNavigate();
  const toEllipses = useEllipses(props.entry.title, 15);
  const [openTools, setOpenTools] = useState(false);

  const handleOpenTools = () => {
    setOpenTools((prev) => !prev);
  }

  return (
    <a className='entry' >
      <div className='entry-ribbon'>
        <div style={{width: '90%', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between'}}>  
          <div style={{display: 'flex'}}>
            <MoodIcon mood={props.entry.mood} />
            <p style={{marginLeft: '1rem', padding: 0, marginBlock: 0}}>{props.entry.date}</p>
          </div>
          <div style={{textAlign: 'end'}}>
            <div style={{display: 'flex'}}>
              <div id='toolbar-toggle' style={{ transform: openTools ? 'translateX(-40px)' : 'translateX(0)', zIndex: 99, transition: '.3s ease-in-out'}} onClick={handleOpenTools} >
                <HiOutlineDotsVertical size={25}  />
              </div>
              <DeleteModal id={props.entry.id} open={openTools} setOpenTools={setOpenTools} />
            </div>
          </div>
        </div>
      </div>
      <div className='entry-title' onClick={() => navigate(`/journal/post/${props.entry.id}`)}>
        <h2>{toEllipses}</h2>
      </div>
    </a>
  )
}

export default Entry
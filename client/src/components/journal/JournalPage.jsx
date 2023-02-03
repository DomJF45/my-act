import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useColorTheme from '../util/hooks/uesColorTheme';
import Entries from './Entries';
import { journalData } from './journalData';
import { IconContext } from 'react-icons/lib';
import { GrAdd } from 'react-icons/gr';
import { IoAddOutline } from 'react-icons/io5';
import { Button } from 'react-bootstrap';
import Modal from './modal/Modal';
import '../../styles/Journal.css';

const JournalPage = () => {

  const { mode } = useSelector((state) => state.theme);
  const { posts } = useSelector((state) => state.journal);
  let journalData = posts;
  const [modalShow, setModalShow] = useState(false);
  
  useEffect(() => {

  }, [])

  return (
    <>
      <div className='container' style={{minHeight: 'calc(100vh - 4.75rem - 80px - 1rem)'}}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
            marginInline: '1rem',
          }}
        >
          <h1 style={{color: mode === 'dark' ? 'rgba(255,255,255, .87)' : '#9747FF'}}>Your Journal</h1>
          <div id='add-icon' onClick={() => setModalShow(true)}>
            <IconContext.Provider value={{color: mode === 'dark' ? 'rgba(255,255,255, .87)' : '#FFF'}}>
              <IoAddOutline size={25} /> 
            </IconContext.Provider>
          </div>
        </div>
        <div className="animate-fade-up">
          <Entries journal={journalData} />
        </div>
      </div>
      <Modal modalShow={modalShow} setModalShow={setModalShow} />
    </>
  )
}

export default JournalPage
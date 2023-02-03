import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { moodData } from './moodData';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addPost } from '../../../features/journal/journalSlice';
import useDate from '../../util/hooks/useDate';
import Mood from './Mood';
import './Modal.css';

const Modal = ({ modalShow, setModalShow }) => {

  const dispatch = useDispatch();
  
  const [selectedMood, setSelectedMood] = useState(null);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const todaysDate = useDate();

  const handleAddPost = () => {

    const postData = {
      id: nanoid(),
      date: todaysDate,
      title: title,
      content: body,
      mood: selectedMood
    }

    dispatch(addPost(postData));    

    setModalShow(false);

  }

  return (
    <div className={modalShow ? 'background' : 'background-hidden'}>
      <div className={modalShow ? 'my-modal-container' : 'my-modal-container-hidden'}>
        <div className='my-modal-close' onClick={() => setModalShow(false)}>
          <RiCloseLine size={30}  />
        </div>
        <div className='my-modal-body'>
          <div className="my-modal-title">
            <h1>Add a journal entry</h1>
          </div>
          <div className="my-modal-content">
            <div className="my-modal-title-form">
              <div className="rate-feeling">
                <h4>How are you feeling?</h4>
                <div className="mood">
                  { moodData.map((mood, index) => {
                    return (
                      <Mood mood={mood} key={index} selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
                    )
                  })}
                </div>
              </div>
              <Form className="entry-form" id="entry-form">
                <h4>Title</h4>
                <Form.Control placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <h4 style={{marginTop: '1rem'}}>Body</h4>
                <Form.Control placeholder='body' as='textarea' rows={8} value={body} onChange={(e) => setBody(e.target.value)} />
              </Form>
            </div>
          </div>
        </div>
        <div className="my-modal-footer">
          <Button id="my-modal-submit" form='entry-form' onClick={handleAddPost}>Add</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
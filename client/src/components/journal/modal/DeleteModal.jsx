import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { deletePost } from '../../../features/journal/journalSlice';
import { useDispatch } from 'react-redux';

const DeleteModal = ({ id, open, setOpenTools }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (open) {
      // delete
      dispatch(deletePost(id));
      setOpenTools(false);
    } 
  }

  return (
    <div className={open ? 'delete-modal-open' : 'delete-modal-close'}>
      <BiTrash size={25} id='delete-btn' onClick={handleDelete} />
    </div>
  )
}

export default DeleteModal
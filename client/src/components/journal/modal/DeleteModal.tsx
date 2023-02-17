import React from 'react';
import { BiTrash } from 'react-icons/bi';
import { deletePost } from '../../../features/journal/journalSlice';
import { useDispatch } from 'react-redux';

interface Props {
  id: string,
  open: boolean,
  setOpenTools: (value: boolean) => void
}

const DeleteModal = (props: Props) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (props.open) {
      dispatch(deletePost(props.id));
      props.setOpenTools(false);
    } 
  }

  return (
    <div className={props.open ? 'delete-modal-open' : 'delete-modal-close'}>
      <BiTrash size={25} id='delete-btn' onClick={handleDelete} />
    </div>
  )
}

export default DeleteModal
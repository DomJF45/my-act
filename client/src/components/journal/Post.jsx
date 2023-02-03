import React from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const Post = () => {

  const { id } = useParams();
  const { posts } = useSelector((state) => state.journal);

  const post = posts.find(entry => id === entry.id);

  return (
    <>
      <div className='container' style={{height: 'calc(100vh - 4.75rem - 80px)'}}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </>
  )
}

export default Post
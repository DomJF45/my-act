import React from 'react';
import {IconContext} from 'react-icons';
import {FaUserCircle} from 'react-icons/fa';
import {AiFillCaretDown} from 'react-icons/ai';

const UserNav = () => {
  return (
    <>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
          alignSelf: 'center',
          width: '90px',
          backgroundColor: 'rgb(235, 235, 235)',
          marginBottom: '10px',
          height: '50px',
          borderRadius: '10px'
        }}
      >
        <IconContext.Provider value={{color: '#9747FF'}}>
          <AiFillCaretDown size={20} style={{marginRight: '13px'}} />
          <p style={{float: 'right', marginRight: '10px', marginTop: '15px'}}><FaUserCircle size={30} /> </p>
        </IconContext.Provider>
      </div>
    </>
  )
}

export default UserNav
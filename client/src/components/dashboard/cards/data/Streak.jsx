import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import '../../../../styles/DataStyles/DataCard.css'
import { HiOutlineFire } from 'react-icons/hi'
import { IconContext } from 'react-icons'

const Streak = (props) => {

  const { mode } = useSelector((state) => state.theme);

  const color = (mode === 'dark' ? '#DAC0FC' : '#9747FF')

  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className="data-card">
          <div className="data-card-icon">
            <HiOutlineFire size={60} />
          </div>
          <div className="data-card-text">
            <p>{props.data ? props.data : '--'}</p>
            <h5>day streak</h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Streak
import React, { useState, useEffect } from 'react'
import '../../../../styles/DataCard.css'
import { HiOutlineFire } from 'react-icons/hi'
import { IconContext } from 'react-icons'

const Streak = () => {
  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className="data-card">
          <div className="data-card-icon">
            <HiOutlineFire size={100} />
          </div>
          <div className="data-card-text">
            <p>--</p>
            <h5>day streak</h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Streak
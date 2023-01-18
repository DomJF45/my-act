import React from 'react'
import { IconContext } from 'react-icons'
import { CiClock2 } from 'react-icons/ci'
import '../../../../styles/DataStyles/DataCard.css'

const Hours = (props) => {
  return (
    <> 
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className="data-card">
          <div className="data-card-icon">
            <CiClock2 size={60} />
          </div>
          <div className="data-card-text">
            <p>{props.data ? props.data : '--'}</p>
            <h5>hours on the app</h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Hours
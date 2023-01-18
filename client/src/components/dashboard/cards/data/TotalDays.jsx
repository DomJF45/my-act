import React from 'react'
import { IconContext } from 'react-icons'
import { RxCalendar } from 'react-icons/rx'
import '../../../../styles/DataStyles/DataCard.css'

const TotalDays = (props) => {
  return (
    <>
      <IconContext.Provider value={{color: '#9747FF'}}>
        <div className="data-card">
          <div className="data-card-icon">
            <RxCalendar size={60} />
          </div>
          <div className="data-card-text">
            <p>{props.data ? props.data : '--'}</p>
            <h5>days accessed</h5>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default TotalDays
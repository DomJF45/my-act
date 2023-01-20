import React from 'react'
import Streak from './Streak'
import '../../../../styles/DataStyles/DataCard.css'
import Hours from './Hours'
import TotalDays from './TotalDays'
import CoreProcessRadar from './CoreProcessRadar'
import { testData } from './testData'
import ExerciseGraph from './ExerciseGraph'

const DataContainer = () => {
  return (
    <>
      <div className='parent-data-container'>
        
        <div className='l-data-container'>
          <CoreProcessRadar data={testData} />
        </div>
        <div
          className='child-data-container'
        >
          <div className="data-container">
            <Streak data={testData.userTimeData.streak} />
            <Hours data={testData.userTimeData.totalHours} />
            <TotalDays data={testData.userTimeData.daysAccessed} />
          </div>
          <div className="data-container-alt">
            <ExerciseGraph data={testData} />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default DataContainer
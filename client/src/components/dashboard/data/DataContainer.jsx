import React from 'react';
import { testData } from './testData';
import Streak from './Streak';
import Hours from './Hours';
import TotalDays from './TotalDays';
import CoreProcessRadar from './CoreProcessRadar';
import ExerciseGraph from './ExerciseGraph';
import '../../../styles/DataStyles/DataCard.css';

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
import React from 'react';
import DataContainer from './data/DataContainer';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard-container'>
        <div className="container">
          <div className='animate-fade-up'>
            <div className="title-and-user-container">
              <DataContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
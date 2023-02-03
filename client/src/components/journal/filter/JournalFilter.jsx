import React, { useState } from 'react';
import { MdOutlineFilterList } from 'react-icons/md'
import useEllipses from '../../util/hooks/useEllipses';
import Filter from './Filter';

const filterData = [
  'all', 
  'date(asc)',
  'date(desc)',
  'happy',
  'good',
  'neutral',
  'sad',
  'awful'
]

const JournalFilter = ({ filter, setFilter }) => {

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <div
        className='filter-container'
        style={{
          borderBottomLeftRadius: openFilter ? '0' : '3px',
          borderBottomRightRadius: openFilter ? '0' : '3px',
          transition: '.2s ease-in-out',
          
        }}
      >
        <p style={{padding: 0, margin: 0, marginLeft: '.5rem'}}>{useEllipses(filter, 9)}</p>
        <MdOutlineFilterList id='filter-icon' onClick={() => setOpenFilter((prev) => !prev)} style={{marginRight: '.5rem', color: 'rgba(255, 255, 255, .87)'}} size={20} />
        <div
          style={{
            height: openFilter ? '200px' : '0',
          }}
          className='filter-dropdown'
        >
          {filterData.map((type, index) => {
            return (
              <Filter currentFilter={filter} filter={type} setFilter={setFilter} openFilter={openFilter} setOpenFilter={setOpenFilter} />
            )
          })}
          
        </div>
      </div>
    </>
  )
}

export default JournalFilter
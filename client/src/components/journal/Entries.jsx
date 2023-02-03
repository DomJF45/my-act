import React from 'react';
import Entry from './Entry';
import { Container } from 'react-bootstrap';
import useFilter from '../util/hooks/useFilter';

const Entries = ({ journal, filter }) => {

  const filteredJournals = useFilter(journal, filter);

  if (journal === null || journal.length === 0) {
    return (
      <>
        <div className='entry-empty'>
          
          <div style={{textAlight: 'center'}}>
            <h3>There's nothing here!</h3>
            <h3>Try adding a new Journal Entry.</h3>
          </div>
          
        </div>
      </>
    )
  } else {

    return (
      <div className='entries-container'>
        {filteredJournals.map((entry, index) => {
          return (
            <Entry entry={entry} key={index} />
          )
        })}
      </div>
    )
  }

}

export default Entries
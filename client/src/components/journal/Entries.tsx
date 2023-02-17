import React from 'react';
import Entry from './Entry';
import useFilter from '../util/hooks/useFilter';
import { iJournal } from './journalData';

interface Props {
  journal: iJournal[] | null,
  filter: string
}

const Entries = (props: Props) => {

  const filteredJournals: iJournal[] = useFilter(props.journal!, props.filter);

  if (props.journal === null || props.journal.length === 0) {
    return (
      <>
        <div className='entry-empty'>
          
          <div style={{textAlign: 'center'}}>
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
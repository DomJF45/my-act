import React from 'react'

const useFilter = (journalData, filter) => {

  let arrForSort = [...journalData];

  switch (filter) {
    case ('all'):
      return journalData;
    case ('date(asc)'):
      return arrForSort.sort(function(a, b) {
        const c = new Date(a.date);
        const d = new Date(b.date);
        return c - d;
      }); // for now
    case ('date(desc)'):
      return arrForSort.sort(function(a, b) {
        const c = new Date(a.date);
        const d = new Date(b.date);
        return d - c;
      }); // for now
    case ('happy'):
      return arrForSort.filter((entry) => entry.mood === 'happy' && entry.mood === filter);
    case ('good'):
      return arrForSort.filter((entry) => entry.mood === 'good' && entry.mood === filter);
    case ('neutral'):
      return arrForSort.filter((entry) => entry.mood === 'neutral' && entry.mood === filter);
    case ('sad'):
      return arrForSort.filter((entry) => entry.mood === 'sad' && entry.mood === filter);
    case ('awful'):
      return arrForSort.filter((entry) => entry.mood === 'awful' && entry.mood === filter);
    default:
      return journalData;
  }
}

export default useFilter
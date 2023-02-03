import React from 'react'

const Filter = ({ currentFilter, filter, setFilter, openFilter, setOpenFilter }) => {

  const handleFilterChange = () => {
    setFilter(filter);
    setOpenFilter(false);
  }

  if (currentFilter !== filter) {
    return (
      <>
        <a id='filter-text' style={{ display: openFilter ? 'block' : 'none'}} onClick={handleFilterChange}>{filter}</a>
      </>
    )
  }

}

export default Filter
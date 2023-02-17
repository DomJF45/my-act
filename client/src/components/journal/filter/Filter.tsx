import React from 'react'

interface Props {
  currentFilter: string,
  filter: string,
  setFilter: (value: string) => void,
  openFilter: boolean,
  setOpenFilter: (value: boolean) => void
}

const Filter = (props: Props): JSX.Element => {

  const handleFilterChange = () => {
    props.setFilter(props.filter);
    props.setOpenFilter(false);
  }

  if (props.currentFilter !== props.filter) {
    return (
      <>
        <a id='filter-text' style={{ display: props.openFilter ? 'block' : 'none'}} onClick={handleFilterChange}>{props.filter}</a>
      </>
    )
  } else {
    return <></>;
  }

}

export default Filter
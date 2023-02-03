import React, { useState } from 'react'
import '../../../styles/processes/Values.css'

const Card = ({ cardData, isOneCard, oneCardData, setOneCardData }) => {

  const [isDrag, setIsDrag] = useState(false);

  const handleDragStart = (e) => {
    setIsDrag(true);
    const data = JSON.stringify({ type: 'card'});
    e.dataTransfer.setData('text/plain', data);
  }

  const handleDragEnd = (e) => {
    setIsDrag(false);
    e.dataTransfer.clear();
  }

  return (
    <div 
      className="values-card"
      style={{
        backgroundColor: isDrag ? "#b989f9" : "#f4ebff"
      }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      { isOneCard ? (<>
        {setOneCardData(cardData)}
        <h5>{oneCardData.value}</h5>
        <p>{oneCardData.bio}</p>
      </>):(<>
        <h5>{cardData.value}</h5>
        <p>{cardData.bio}</p>
      </>)}
    </div>
  )
}

export default Card
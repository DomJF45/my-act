import React from 'react';
import { useState } from 'react';
import { cardData } from './cardData';
import Card from './Card';
import '../../../styles/processes/Values.css';

const Box = ({ card, moveCard, label }) => {

  const [isOver, setIsOver] = useState(false);
  const [oneCardData, setOneCardData] = useState({});

  const handleDragOver = (e) => {
    if (e.dataTransfer.types[0] === 'text/plain') {
      setIsOver(true);
      e.preventDefault();
    }
  }

  const handleDragLeave = (e) => {
    setIsOver(false);
  }

  const handleDragDrop = (e) => {
    const dataJSON = e.dataTransfer.getData('text/plain');
    let data;
    try {
      data = JSON.parse(dataJSON);
    } catch {}
    if (data && data.type === 'card') {
      moveCard();
      setIsOver(false);
    }
  }

  return (
    <div 
      className='values-box'
      style={{
        backgroundColor: isOver ? "#f4ebff" : "rgba(0,0,0,.12)"
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragDrop}
    >
      <h3>{label}</h3>
      {cardData.map((data) => (<>
          {label === 'Unsorted' && (<Card isOneCard={false} cardData={data}></Card>)}
          
        </>
        ))}
      { card ? (<>
        <Card cardData={oneCardData} isOneCard={true} oneCardData={oneCardData} setOneCardData={setOneCardData}/>
      </>):('')}
    </div>
  )
}

export default Box
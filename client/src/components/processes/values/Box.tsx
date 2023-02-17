import React from 'react';
import { useState } from 'react';
import { cardData } from './cardData';
import { iCard } from './cardData';
import Card from './Card';
import '../../../styles/processes/Values.css';



interface Props {
  card: iCard;
  moveCard: any;
  label: any;
}

const Box = ({ card, moveCard, label }: Props) => {

  const [isOver, setIsOver] = useState(false);
  const [oneCardData, setOneCardData] = useState<iCard | undefined>(undefined);

  const handleDragOver = (e: any) => {
    if (e.dataTransfer.types[0] === 'text/plain') {
      setIsOver(true);
      e.preventDefault();
    }
  }

  const handleDragLeave = (e: any) => {
    setIsOver(false);
  }

  const handleDragDrop = (e: any) => {
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
          {label === 'Unsorted' && (<Card isOneCard={false} cardData={data} oneCardData={oneCardData} setOneCardData={setOneCardData}></Card>)}
          
        </>
        ))}
      { card ? (<>
        <Card cardData={oneCardData} isOneCard={true} oneCardData={oneCardData} setOneCardData={setOneCardData}/>
      </>):('')}
    </div>
  )
}

export default Box
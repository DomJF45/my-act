import React, { useState } from 'react'
import { iCard } from './cardData';
import '../../../styles/processes/Values.css'
import { OnDragEndResponder, OnDragStartResponder } from 'react-beautiful-dnd';

interface Props {
  cardData: iCard | undefined;
  isOneCard: boolean;
  oneCardData: iCard | undefined;
  setOneCardData: (value: iCard) => void;
}

const Card = (props: Props) => {

  const [isDrag, setIsDrag] = useState(false);

  const handleDragStart = (e: any) => {
    setIsDrag(true);
    const data = JSON.stringify({ type: 'card'});
    e.dataTransfer!.setData('text/plain', data);
  }

  const handleDragEnd = (e: any) => {
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
      { props.isOneCard ? (<>
        {props.setOneCardData(props.cardData!)}
        <h5>{props.oneCardData!.value}</h5>
        <p>{props.oneCardData!.bio}</p>
      </>):(<>
        <h5>{props.cardData!.value}</h5>
        <p>{props.cardData!.bio}</p>
      </>)}
    </div>
  )
}

export default Card
import React from 'react';

interface Props {
  mood: {
    mood: string,
    icon: JSX.Element,
    color: string
  },
  selectedMood: string,
  setSelectedMood: (value: string) => void
}

const Mood = (props: Props) => {


  return (
    <div style={{cursor: 'pointer', margin: 0}} onClick={() => {props.setSelectedMood(props.mood.mood)}}>
      {props.mood.icon}
      <div style={{backgroundColor: props.selectedMood === props.mood.mood ? props.mood.color : 'transparent', borderRadius: '5px'}}>
        <p style={{
          fontSize: '12px', 
          textAlign: 'center', 
          color: props.selectedMood === props.mood.mood ? '#fff' : props.mood.color,
          marginBottom: '1rem'
        }}>{props.mood.mood}</p>
      </div>
    </div>
  )
}

export default Mood
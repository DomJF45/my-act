import React from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const Mood = ({ mood, selectedMood, setSelectedMood }) => {

  const pStyle = {
    fontSize: '12px', 
    textAlign: 'center', 
    color: selectedMood === mood.mood ? '#fff' : mood.color,
    marginBottom: '1rem',
    
  }

  return (
    <div style={{cursor: 'pointer', margin: 0}} onClick={() => {setSelectedMood(mood.mood)}}>
      {mood.icon}
      {/* <p style={{fontSize: '12px', textAlign: 'center', color: mood.color}}>{mood.mood}</p> */}
      <div style={{backgroundColor: selectedMood === mood.mood ? mood.color : 'transparent', borderRadius: '5px'}}>
        <p style={pStyle}>{mood.mood}</p>
      </div>
    </div>
  )
}

export default Mood
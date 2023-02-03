import React from 'react';

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
      <div style={{backgroundColor: selectedMood === mood.mood ? mood.color : 'transparent', borderRadius: '5px'}}>
        <p style={pStyle}>{mood.mood}</p>
      </div>
    </div>
  )
}

export default Mood
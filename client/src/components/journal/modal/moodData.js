import React from 'react';
import { 
  TbMoodHappy,
  TbMoodSmile,
  TbMoodNeutral,
  TbMoodSad,
  TbMoodCry,
} from 'react-icons/tb';

const bigSize = 60;

export const moodData = [
  {
    mood: 'happy',
    icon: <TbMoodHappy size={bigSize} color='#15B790' />,
    color: '#15B790'
  },
  {
    mood: 'good',
    icon: <TbMoodSmile size={bigSize} color='#61CE70' />,
    color: '#61CE70'
  },
  {
    mood: 'neutral',
    icon: <TbMoodNeutral size={bigSize} color='#67B6FF' />,
    color: '#67B6FF'
  },
  {
    mood: 'sad',
    icon: <TbMoodSad size={bigSize} color='#FFA734' />,
    color: '#FFA734'
  },
  {
    mood: 'awful',
    icon: <TbMoodCry size={bigSize} color='#F76262' />,
    color: '#F76262'
  }
]


import React from 'react'
import { 
  TbMoodHappy,
  TbMoodSmile,
  TbMoodNeutral,
  TbMoodSad,
  TbMoodCry,
} from 'react-icons/tb';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useAppSelector } from '../../app/hooks';

interface Props {
  mood: string
}

const MoodIcon = (props: Props) => {

  const { mode } = useAppSelector((state) => state.theme);

  const bigSize = 23;
  const color = mode === 'dark' ? 'rgba(255,255,255, .87)' : '#9747FF';

  switch (props.mood) {
    case 'happy':
      return(<TbMoodHappy size={bigSize} color={color} />);
    case 'good':
      return(<TbMoodSmile size={bigSize} color={color} />);
    case 'neutral':
      return(<TbMoodNeutral size={bigSize} color={color} />);
    case 'sad':
      return(<TbMoodSad size={bigSize} color={color} />);
    case 'awful':
      return(<TbMoodCry size={bigSize} color={color} />);
    default:
      return(<AiFillQuestionCircle size={bigSize} color={color} />);
  }
}

export default MoodIcon
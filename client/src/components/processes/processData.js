import React from 'react';
import { AiOutlineHourglass } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { MdSelfImprovement } from 'react-icons/md';
import { RiTreasureMapLine } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';

export const processData = [
  {
    processName: 'Present',
    processBio: 'Being present in ACT promotes non-judgemental and continuous interactions with psychological and environmental events as they occur. Being present is the process of becoming attuned to what is occurring in the present moment.',
    processImg: <AiOutlineHourglass size={100} />,
    link: 'present'
  },
  {
    processName: 'Values',
    processBio: 'Values are chosen qualities of purposive action that can never be obtained as an object but can be instantiated moment by moment',
    processImg: <BsBook size={100} />,
    link: 'values'
  },
  {
    processName: 'Commitment',
    processBio: 'Commitment is a stage where an individual commits to actions that help them facilitate their experience and embrace change',
    processImg: <FaRegHandshake size={100} />,
    link: 'commitment',
  },
  {
    processName: 'Self',
    processBio: 'Self in ACT is defined as a perspective for one to be aware of one’s own “flow” while the concept of responsibility or attachment is observed contextually and without judgment / emotion. The concept of self is meant to be rigid and through a plethora of emotions, nothing can change the self.',
    processImg: <MdSelfImprovement size={100} />,
    link: 'self'
  },
  {
    processName: 'Defusion',
    processBio: 'Cognitive defusion involves framing undesirable thoughts through a different perspective. Rather than try to alter the form, frequency, or sensitivity, frame the thought through a different perspective such as viewing the thought as a scientist or by giving the thoughts colors, sizes, etc.',
    processImg: <RiTreasureMapLine size={100} />,
    link: 'defusion'
  },
  {
    processName: 'Acceptance',
    processBio: 'Acceptance is taught as an alternative to experiential avoidance. Acceptance involves the active and aware embrace of those private events occasioned by one’s history without unnecessary attempts to change their frequency or form, especially when doing so would cause psychological harm. ',
    processImg: <FaRegSmile size={100} />,
    link: 'acceptance'
  }
]
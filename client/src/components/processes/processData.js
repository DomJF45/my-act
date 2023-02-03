import React from 'react';
import { AiOutlineHourglass } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { MdSelfImprovement } from 'react-icons/md';
import { RiTreasureMapLine } from 'react-icons/ri';
import { FaRegSmile } from 'react-icons/fa';

const bigSize = 100;
const smallSize = 80;

export const processData = [
  {
    processName: 'Present',
    processBio: 'Being present in ACT promotes non-judgemental and continuous interactions with psychological and environmental events as they occur.',
    processImg: <AiOutlineHourglass size={bigSize} />,
    processImgSmall: <AiOutlineHourglass size={smallSize} />,
    link: 'present'
  },
  {
    processName: 'Values',
    processBio: 'Values are chosen qualities of purposive action that can never be obtained as an object but can be instantiated moment by moment',
    processImg: <BsBook size={bigSize} />,
    processImgSmall: <BsBook size={smallSize} />,
    link: 'values'
  },
  {
    processName: 'Commitment',
    processBio: 'Commitment is a stage where an individual commits to actions that help them facilitate their experience and embrace change',
    processImg: <FaRegHandshake size={bigSize} />,
    processImgSmall: <FaRegHandshake size={smallSize} />,
    link: 'commitment',
  },
  {
    processName: 'Self',
    processBio: 'Self in ACT is defined as a perspective for one to be aware of one’s own “flow”.',
    processImg: <MdSelfImprovement size={bigSize} />,
    processImgSmall: <MdSelfImprovement size={smallSize} />,
    link: 'self'
  },
  {
    processName: 'Defusion',
    processBio: 'Cognitive defusion involves framing undesirable thoughts through a different perspective.',
    processImg: <RiTreasureMapLine size={bigSize} />,
    processImgSmall: <RiTreasureMapLine size={smallSize} />,
    link: 'defusion'
  },
  {
    processName: 'Acceptance',
    processBio: 'Acceptance is taught as an alternative to experiential avoidance.',
    processImg: <FaRegSmile size={bigSize} />,
    processImgSmall: <FaRegSmile size={smallSize} />,
    link: 'acceptance'
  }
]
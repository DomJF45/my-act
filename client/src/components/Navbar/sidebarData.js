import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome size={30} />,
    cName: 'nav-text',
    header: 'View Your Progress'
  },
  {
    title: 'Processes',
    path:'/processes',
    icon: <BiIcons.BiBrain size={30} />,
    cName: 'nav-text',
    header: 'Learn',
    submenu: [
      {
        title: 'Present',
        path: '/processes/present',

      },
      {
        title: 'Values',
        path: '/processes/values',

      },
      {
        title: 'Commitment',
        path: '/processes/commitment',

      },
      {
        title: 'Self',
        path: '/processes/self',

      },
      {
        title: 'Defusion',
        path: '/processes/defusion',

      },
      {
        title: 'Acceptance',
        path: '/processes/acceptance',

      },
    ]
  },
  {
    title: 'Exercises',
    path:'/exercises',
    icon: <GiIcons.GiLotus size={30} />,
    cName: 'nav-text',
    header: 'Engage',
    submenu: [
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
      {
        title: 'Present',
        exercise: 'Breathing',
        path: '/processess/breathing'
      },
    ]
  }
]
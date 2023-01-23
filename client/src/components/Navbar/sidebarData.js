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
    header: 'Learn'
  },
  {
    title: 'Exercises',
    path:'/exercises',
    icon: <GiIcons.GiLotus size={30} />,
    cName: 'nav-text',
    header: 'Engage'
  }
]
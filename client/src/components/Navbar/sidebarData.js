import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome size={30} />,
    cName: 'nav-text'
  },
  {
    title: 'Processes',
    path:'/processes',
    icon: <BiIcons.BiBrain size={30} />,
    cName: 'nav-text'
  },
  {
    title: 'Exercises',
    path:'/dashboard/exercises',
    icon: <GiIcons.GiLotus size={30} />,
    cName: 'nav-text'
  }
]
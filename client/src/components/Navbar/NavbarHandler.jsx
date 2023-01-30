import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
import useScreenSize from '../util/hooks/useScreenSize';
import MobileNav from './MobileNav';
import TopContainer from './TopContainer';

const NavbarHandler = () => {

  const windowSize = useScreenSize();

  if (windowSize.width < 1030) {
    return (
      <MobileNav />
    )
  } else {
    return <TopContainer  />
  }
}

export default NavbarHandler
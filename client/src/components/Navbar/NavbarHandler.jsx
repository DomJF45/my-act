import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
import useScreenSize from '../util/hooks/useScreenSize';
import MobileNav from './MobileNav';

const NavbarHandler = () => {

  const windowSize = useScreenSize();

  if (windowSize.width < 1030) {
    return (
      <MobileNav />
    )
  } else {
    return <Sidebar />
  }
}

export default NavbarHandler
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'
import useScreenSize from '../util/hooks/useScreenSize';

const NavbarHandler = () => {

  const windowSize = useScreenSize();

  if (windowSize.width < 1030) {
    return (
      <MobileSidebar />
    )
  } else {
    return <Sidebar />
  }
}

export default NavbarHandler
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'

const NavbarHandler = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  if (windowSize.width < 1030) {
    return (
      <MobileSidebar />
    )
  } else {
    return <Sidebar />
  }
}

export default NavbarHandler
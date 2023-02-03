import React from 'react';
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
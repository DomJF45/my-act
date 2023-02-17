import { useState, useEffect } from 'react';

type windowType = {
  width: number | undefined,
  height: number | undefined
}

const useScreenSize = () => {

  const defaultWindowSize: windowType = {
    width: undefined,
    height: undefined
  }
  
  const [windowSize, setWindowSize] = useState(defaultWindowSize);

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

  },[]);

  return windowSize;

}

export default useScreenSize;
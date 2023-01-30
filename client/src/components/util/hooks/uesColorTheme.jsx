import React from 'react'
import { useSelector } from 'react-redux'

const useColorTheme = () => {
  
  const { mode } = useSelector((state) => state.theme);

  const color = (mode === 'dark' ? '#fff' : '#303030');

  return color;

}

export default useColorTheme;
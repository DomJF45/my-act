import { useSelector } from 'react-redux'

const useColorTheme = () => {
  
  const { mode } = useSelector((state) => state.theme);

  const color = (mode === 'dark' ? 'rgba(255,255,255, .87)' : '#303030');

  return color;

}

export default useColorTheme;
import { useAppSelector } from '../../../app/hooks';

const useColorTheme = () => {
  
  const { mode } = useAppSelector((state) => state.theme);

  const color = (mode === 'dark' ? 'rgba(255,255,255, .87)' : '#303030');

  return color;

}

export default useColorTheme;
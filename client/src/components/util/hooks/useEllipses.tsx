
const useEllipses = ( string: string, maxNum: number ) => {
  let stringArr: string[] = string.split('');

  if (stringArr.length <= maxNum - 3) {
    return string;
  }

  stringArr = stringArr.slice(0, maxNum - 3);

  let ellipses = stringArr.join('');
  ellipses = ellipses + '...';

  return ellipses;

}

export default useEllipses;
import React from 'react'

const useEllipses = ( string, maxNum ) => {
  let stringArr = string.split('');

  if (stringArr.length <= maxNum - 3) {
    return string;
  }

  let ellipses = stringArr.slice(0, maxNum - 3);

  ellipses = ellipses.join('');
  ellipses = ellipses + '...';

  return ellipses;

}

export default useEllipses
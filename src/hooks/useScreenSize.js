import { useState, useEffect } from 'react';

const calcScreenSize = () => {
  if (window.innerWidth >= 992) {
    return 5;
  } else if (window.innerWidth >= 768) {
    return 3;
  } else {
    return 2;
  }
};

let timeOutIdFunction;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(calcScreenSize());

  const resizeScreen = () => {
    clearTimeout(timeOutIdFunction);
    timeOutIdFunction = setTimeout(() => {
      setScreenSize(calcScreenSize());
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeScreen);
    return () => {
      window.removeEventListener('resize', resizeScreen);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;

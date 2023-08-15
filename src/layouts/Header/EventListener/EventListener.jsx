import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsMenuOpen } from '~/redux/slice/headerSlice';

import useScreenSize from '~/hooks/useScreenSize';

const EventListener = () => {
  const dispatch = useDispatch();
  const isDesktop = useScreenSize();

  useEffect(() => {
    dispatch(
      setIsMenuOpen({
        isMenuOpen: false,
        isAnimated: false,
      }),
    );
  }, [isDesktop]);

  return null;
};

export default EventListener;

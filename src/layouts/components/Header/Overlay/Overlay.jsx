import { useCallback } from 'react';

import classNames from 'classnames/bind';
import styles from './Overlay.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, isMenuOpenSelector } from '~/redux/slice/headerSlice';

const cx = classNames.bind(styles);

const Overlay = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(isMenuOpenSelector);

  const disable = {
    disable: !isMenuOpen,
  };

  const handleClick = useCallback(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div onClick={handleClick} className={cx('header', disable)}>
      <div onClick={handleClick} className={cx('inset', disable)} />
    </div>
  );
};

export default Overlay;
import { useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  isAnimatedSelector,
  isMenuOpenSelector,
  closeMenu,
} from '~/redux/slice/headerSlice';

import Actions from '../Actions';
import NavDropDown from './NavDropDown';
import NavLink from './NavLink';

const cx = classNames.bind(styles);

const NavBar = () => {
  const navRef = useRef();

  const dispatch = useDispatch();

  const isAnimated = useSelector(isAnimatedSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);

  const location = useLocation();
  const pathname = useMemo(() => location.pathname, [location.pathname]);

  const handleCloseMenu = useCallback(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <nav
      ref={navRef}
      className={cx('wrapper', {
        transition: isAnimated,
        open: isMenuOpen,
      })}
    >
      <NavDropDown
        isAnimated={isAnimated}
        pathname={pathname}
        handleCloseMenu={handleCloseMenu}
      />
      <NavLink pathname={pathname} handleCloseMenu={handleCloseMenu} />
      <Actions responsive handleCloseMenu={handleCloseMenu} />
    </nav>
  );
};

export default NavBar;

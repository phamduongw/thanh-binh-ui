import { forwardRef, memo, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './NavDropDown.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  isServicesOpenSelector,
  setIsServicesOpen,
} from '~/redux/slice/headerSlice';

import Button from '~/components/Button';

import { DropDownIcon } from '~/components/Icons';

import SERVICES from '~/data/SERVICES';

import config from '~/config';

const cx = classNames.bind(styles);

const DropDownServices = memo(
  forwardRef(({ isAnimated, isServicesOpen, handleCloseMenu }, ref) => (
    <div
      ref={ref}
      className={cx('drop-down', {
        'drop-down-animated': isAnimated,
        open: isServicesOpen,
      })}
    >
      <ul className={cx('service-wrap')}>
        {SERVICES.map(({ to, title, icon: Icon }) => (
          <li key={to}>
            <Button
              to={to}
              onClick={handleCloseMenu}
              className={cx('service-item', {
                'highlight-blue-43': to == window.location.pathname,
              })}
            >
              <Icon width={32} />
              <span>{title}</span>
            </Button>
          </li>
        ))}
      </ul>
      <Button
        to={config.routes.services.path}
        button
        secondary
        small
        onClick={handleCloseMenu}
        className={cx('view-all-btn')}
      >
        View All Services
      </Button>
    </div>
  )),
);

DropDownServices.displayName = 'DropDownServices';

const NavDropDown = memo(({ isAnimated, pathname, handleCloseMenu }) => {
  const toggleRef = useRef();
  const dropDownRef = useRef();

  const dispatch = useDispatch();
  const isServicesOpen = useSelector(isServicesOpenSelector);

  // Add click event handler only when isServicesOpen = true
  useEffect(() => {
    isServicesOpen && document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isServicesOpen]);

  const handleClickOutside = useCallback(({ target }) => {
    !toggleRef.current.contains(target) &&
      !dropDownRef.current.contains(target) &&
      dispatch(setIsServicesOpen(false));
  }, []);

  const handleToggleServices = useCallback(() => {
    dispatch(setIsServicesOpen(!isServicesOpen));
  }, [isServicesOpen]);

  return (
    <div className={cx('wrapper')}>
      <Button
        ref={toggleRef}
        onClick={handleToggleServices}
        className={cx('toggle', {
          'highlight-blue-43': pathname.includes(config.routes.services.path),
        })}
      >
        <span>{config.routes.services.title}</span>
        <DropDownIcon
          className={cx({
            'rotate-animated': isAnimated,
            rotate: isServicesOpen,
          })}
        />
      </Button>
      <DropDownServices
        ref={dropDownRef}
        isAnimated={isAnimated}
        isServicesOpen={isServicesOpen}
        handleCloseMenu={handleCloseMenu}
      />
    </div>
  );
});

NavDropDown.displayName = 'NavDropDown';

export default NavDropDown;

import { forwardRef, memo, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './NavDropDown.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
  isServicesOpenSelector,
  setIsServicesOpen,
} from '~/redux/slice/headerSlice';

import Button from '~/components/Button';
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon4,
  ServiceIcon5,
  DropDownIcon,
} from '~/components/Icons';

import config from '~/config';

const PATH = config.routes.services.path + '/';

const SERVICES = [
  {
    to: PATH + config.routes.services.slugs[0],
    name: 'Office Space',
    icon: ServiceIcon1,
  },
  {
    to: PATH + config.routes.services.slugs[1],
    name: 'Dedicated Desk',
    icon: ServiceIcon2,
  },
  {
    to: PATH + config.routes.services.slugs[2],
    name: 'Coworking Space',
    icon: ServiceIcon3,
  },
  {
    to: PATH + config.routes.services.slugs[3],
    name: 'Virtual Office',
    icon: ServiceIcon4,
  },
  {
    to: PATH + config.routes.services.slugs[4],
    name: 'Meeting Room',
    icon: ServiceIcon5,
  },
];

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
        {SERVICES.map(({ to, name, icon: Icon }) => (
          <li key={name}>
            <Button
              onClick={handleCloseMenu}
              to={to}
              className={cx('service-item', {
                'highlight-blue-43': to == window.location.pathname,
              })}
            >
              <Icon />
              <span>{name}</span>
            </Button>
          </li>
        ))}
      </ul>
      <Button
        onClick={handleCloseMenu}
        to={config.routes.services.path}
        button
        secondary
        small
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
          'highlight-blue-43': pathname.includes('services'),
        })}
      >
        <span>{config.routes.services.title}</span>
        <DropDownIcon
          className={cx({
            rotate: isServicesOpen,
            'rotate-animated': isAnimated,
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

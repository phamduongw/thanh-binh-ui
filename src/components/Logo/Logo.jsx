import classNames from 'classnames/bind';
import styles from './Logo.module.scss';

import { useDispatch } from 'react-redux';
import { closeMenu } from '~/redux/slice/headerSlice';

import Button from '../Button';

import { LogoIcon } from '../Icons';

import config from '~/config';

const cx = classNames.bind(styles);

const Logo = ({ className }) => {
  const dispatch = useDispatch();

  const handleCloseMenu = () => dispatch(closeMenu());

  return (
    <Button
      to={config.routes.home.path}
      fit
      onClick={handleCloseMenu}
      className={cx('svg-animated', className)}
    >
      <LogoIcon className={cx('logo')} />
    </Button>
  );
};

export default Logo;

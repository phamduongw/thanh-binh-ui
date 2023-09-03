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

  return (
    <Button
      to={config.routes.home.path}
      className={cx('wrapper', className)}
      onClick={() => dispatch(closeMenu())}
    >
      <LogoIcon className={cx('logo')} />
    </Button>
  );
};

export default Logo;

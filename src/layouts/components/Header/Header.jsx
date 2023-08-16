import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Actions from './Actions';
import EventListener from './EventListener';
import Logo from '~/components/Logo';
import MenuButton from './MenuButton';
import NavBar from './NavBar';
import Overlay from './Overlay';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('wrapper')}>
    <div className={cx('container')}>
      <Overlay />
      <Logo className={cx('logo')} />
      <MenuButton />
      <NavBar />
      <Actions desktop />
      <EventListener />
    </div>
  </header>
);

export default Header;

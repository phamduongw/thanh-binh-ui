import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Bottom from './Bottom';
import Line from './Line';
import Top from './Top';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('wrapper')}>
    <div className={cx('container')}>
      <Top />
      <Line />
      <Bottom />
    </div>
  </footer>
);

export default Footer;

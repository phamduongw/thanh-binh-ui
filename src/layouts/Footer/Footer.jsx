import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import Top from './Top';
import Line from './Line';
import Bottom from './Bottom';

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

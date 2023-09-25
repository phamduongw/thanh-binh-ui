import classNames from 'classnames/bind';
import styles from './Info.module.scss';

import RichText from '~/components/RichText';

import ABOUT from '~/data/ABOUT';

const cx = classNames.bind(styles);

const Info = () => (
  <section className="container">
    <RichText data={ABOUT} className={cx('content')} />
  </section>
);

export default Info;

import classNames from 'classnames/bind';
import styles from './Line.module.scss';

const cx = classNames.bind(styles);

const Line = () => <hr className={cx('wrapper')} />;

export default Line;

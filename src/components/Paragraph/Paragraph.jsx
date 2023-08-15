import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

const cx = classNames.bind(styles);

const Paragraph = ({
  large = false,
  small = false,
  gray71 = false,
  gray9c = false,
  children,
}) => (
  <p
    className={cx({
      large,
      small,
      gray71,
      gray9c,
    })}
  >
    {children}
  </p>
);

export default Paragraph;

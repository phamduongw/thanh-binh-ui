import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

const cx = classNames.bind(styles);

const Paragraph = ({
  large,
  small,
  gray71,
  gray9c,
  italic,
  children,
  className,
}) => (
  <p
    className={cx({
      large,
      small,
      gray71,
      gray9c,
      italic,
      [className]: className,
    })}
  >
    {children}
  </p>
);

export default Paragraph;

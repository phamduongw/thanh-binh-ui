import classNames from 'classnames/bind';
import styles from './Paragraph.module.scss';

const cx = classNames.bind(styles);

const Paragraph = ({
  large = false,
  small = false,
  gray71 = false,
  gray9c = false,
  children,
}) => {
  const classes = cx({
    large,
    small,
    gray71,
    gray9c,
  });

  return <p className={classes}>{children}</p>;
};

export default Paragraph;

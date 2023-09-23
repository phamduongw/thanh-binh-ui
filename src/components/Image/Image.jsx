import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ w100, h100, srcSet, sizes, src, alt, className }) => (
  <img
    srcSet={srcSet}
    sizes={sizes}
    src={src}
    alt={alt}
    className={cx({
      w100,
      h100,
      [className]: className,
    })}
  />
);

export default Image;

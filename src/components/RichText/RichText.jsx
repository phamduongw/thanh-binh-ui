import classNames from 'classnames/bind';
import styles from './RichText.module.scss';

const cx = classNames.bind(styles);

const RichText = ({ data, className }) => (
  <article className={cx('wrapper', className)}>
    {data.map(({ element: Element, content, className }, index) => (
      <Element key={index} className={className}>
        {content}
      </Element>
    ))}
  </article>
);

export default RichText;

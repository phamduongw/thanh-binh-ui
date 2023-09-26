import classNames from 'classnames/bind';
import styles from './RichText.module.scss';

const cx = classNames.bind(styles);

const RichText = ({ data, className }) => (
  <article className={cx('wrapper', className)}>
    {data.map(
      (
        {
          element: Element,
          subElement: SubElement,
          props,
          className,
          content,
          caption,
        },
        index,
      ) => {
        if (typeof content === 'string') {
          return (
            <Element key={index} {...props} className={className}>
              {content}
            </Element>
          );
        } else if (props) {
          return (
            <figure key={index}>
              <Element {...props} className="rounded-image" />
              <figcaption>{caption}</figcaption>
            </figure>
          );
        } else {
          return (
            <Element key={index}>
              {content.map((item, index) => (
                <SubElement key={index} {...props}>
                  {item}
                </SubElement>
              ))}
            </Element>
          );
        }
      },
    )}
  </article>
);

export default RichText;

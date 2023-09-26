import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import Image from '~/components/Image';
import RichText from '~/components/RichText';

const cx = classNames.bind(styles);

const Content = ({ title, tag, date, poster, content }) => (
  <section className={cx('normal-padding', 'wrapper')}>
    <div className={cx('content')}>
      <div className={cx('heading')}>
        <h1>{title}</h1>
        <div className={cx('meta-wrap')}>
          <span className="blog-tag">{tag}</span>
          <span className={cx('date')}>{date}</span>
        </div>
      </div>
      <Image w100 src={poster} alt="poster" className="rounded-image" />
      <RichText data={content} />
    </div>
  </section>
);

export default Content;

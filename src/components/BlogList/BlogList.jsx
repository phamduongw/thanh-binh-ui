import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BlogList.module.scss';

import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

const cx = classNames.bind(styles);

const BlogCard = ({ poster, tag, title, excerpt, handleLearnMore }) => (
  <article onClick={handleLearnMore} className="card card-effect">
    <div className={cx('poster-wrap')}>
      <Image w100 src={poster} alt="poster" className={cx('poster-image')} />
    </div>
    <div className={cx('card-detail')}>
      <span className="blog-tag">{tag}</span>
      <div>{title}</div>
      <Paragraph gray71>{excerpt}</Paragraph>
    </div>
  </article>
);

const BlogList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={cx('collection', 'grid-layout')}>
      {data.map(({ id, to, poster, tag, title, excerpt }) => (
        <BlogCard
          key={id}
          to={to}
          poster={poster}
          tag={tag}
          title={title}
          excerpt={excerpt}
          handleLearnMore={() => {
            navigate(to);
          }}
        />
      ))}
    </div>
  );
};

export default BlogList;

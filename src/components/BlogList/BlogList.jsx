import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './BlogList.module.scss';

const cx = classNames.bind(styles);

const BlogCard = ({ poster, tag, title, excerpt, handleLearnMore }) => (
  <article
    onClick={handleLearnMore}
    className={cx('card', 'card-effect', 'blog-card')}
  >
    <div className={cx('poster-wrap')}>
      <img src={poster} alt="poster" />
    </div>
    <div className={cx('card-detail')}>
      <span>{tag}</span>
      <div>{title}</div>
      <p>{excerpt}</p>
    </div>
  </article>
);

const BlogList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={cx('collection', 'grid-layout')}>
      {data.map(({ to, poster, tag, title, excerpt }) => (
        <BlogCard
          key={to}
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

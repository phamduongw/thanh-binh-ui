import classNames from 'classnames/bind';
import styles from './Blog.module.scss';

import Button from '~/components/Button';
import BlogList from '~/components/BlogList';

import BLOGS from '~/data/BLOGS';

import config from '~/config';

const cx = classNames.bind(styles);

const Blog = () => (
  <section
    className={cx('section-container-grid', 'normal-padding', 'grid-layout')}
  >
    <div className="section-heading">
      <div className="section-title">Bản tin mỗi ngày</div>
      <h2>Cập nhật thường xuyên!</h2>
    </div>
    <Button
      to={config.routes.blog.path}
      button
      secondary
      className={cx('view-all-btn')}
    >
      Tìm hiểu thêm
    </Button>
    <BlogList data={BLOGS.slice(-3).reverse()} />
  </section>
);

export default Blog;

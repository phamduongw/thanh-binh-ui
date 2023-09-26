import BlogList from '~/components/BlogList';
import Button from '~/components/Button';

import config from '~/config';

const OtherBlogs = ({ data }) => (
  <section className="section-container-flex normal-padding align-center">
    <h2>Các tin tức khác</h2>
    <BlogList data={data} />
    <Button to={config.routes.blog.path} className="back-to-all-btn">
      Xem tất cả
    </Button>
  </section>
);

export default OtherBlogs;

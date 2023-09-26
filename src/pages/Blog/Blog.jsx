import { Helmet } from 'react-helmet-async';

import BlogList from '~/components/BlogList';
import CallToAction from '~/components/CallToAction';
import Paragraph from '~/components/Paragraph';

import BLOGS from '~/data/BLOGS';

const Blog = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <section className="thin-padding">
      <div className="section-container-flex align-center">
        <div className="section-heading text-center">
          <div className="section-title">Tin tức</div>
          <h1>Cập nhật thông tin mới nhất</h1>
          <Paragraph gray71>
            Những thông tin sau đây sẽ giúp bạn tiếp cận và hiểu rõ những tin
            tức, sự kiện mới nhất liên quan đến Thanh Binh Printing.
          </Paragraph>
        </div>
        <BlogList data={[...BLOGS].reverse()} />
      </div>
    </section>
    <CallToAction />
  </main>
);

export default Blog;

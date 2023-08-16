import { Helmet } from 'react-helmet-async';

const Blog = ({ title }) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Blog
    </main>
  );
};

export default Blog;

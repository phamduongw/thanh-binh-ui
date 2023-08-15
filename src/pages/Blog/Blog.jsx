import usePageTitle from '~/hooks/usePageTitle';

const Blog = ({ title }) => {
  usePageTitle(title);
  return <main>Blog</main>;
};

export default Blog;

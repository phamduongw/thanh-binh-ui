import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams();

  return <main>{slug}</main>;
};

export default BlogDetail;

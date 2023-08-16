import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { slug } = useParams();

  return <main>{slug}</main>;
};

export default ServiceDetail;

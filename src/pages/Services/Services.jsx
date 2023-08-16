import { Helmet } from 'react-helmet-async';

const Services = ({ title }) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Services
    </main>
  );
};

export default Services;

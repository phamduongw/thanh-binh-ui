import { Helmet } from 'react-helmet-async';

const Services = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    Services
  </main>
);

export default Services;

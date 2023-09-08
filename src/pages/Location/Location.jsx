import { Helmet } from 'react-helmet-async';

const Location = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    Location
  </main>
);

export default Location;

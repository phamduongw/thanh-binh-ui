import { Helmet } from 'react-helmet-async';

import Hero from './Hero';
import OurGuarantee from './OurGuarantee';
import OurServices from './OurServices';

const Home = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
    <OurServices />
    <OurGuarantee />
  </main>
);

export default Home;

import { Helmet } from 'react-helmet-async';

import Hero from './Hero';
import OurGuarantee from './OurGuarantee';
import OurServices from './OurServices';
import OurWork from './OurWork';
import Reviews from './Reviews';

const Home = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
    <OurServices />
    <OurGuarantee />
    <OurWork />
    <Reviews />
  </main>
);

export default Home;

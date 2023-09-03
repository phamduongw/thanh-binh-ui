import { Helmet } from 'react-helmet-async';

import Hero from './Hero';
import OurServices from './OurServices';

const Home = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
    <OurServices />
  </main>
);

export default Home;

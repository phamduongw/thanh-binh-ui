import { Helmet } from 'react-helmet-async';

import Blog from './Blog';
import CallToAction from './CallToAction';
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
    <CallToAction />
    <Blog />
  </main>
);

export default Home;

import { Helmet } from 'react-helmet-async';

import Blog from './Blog';
import CallToAction from './CallToAction';
import Hero from './Hero';
import OurCustomer from './OurCustomer';
import OurGuarantee from './OurGuarantee';
import OurServices from './OurServices';
import OurTeam from './OurTeam';
import OurWork from './OurWork';

const Home = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
    <OurServices />
    <OurGuarantee />
    <OurWork />
    <OurCustomer />
    <OurTeam />
    <CallToAction />
    <Blog />
  </main>
);

export default Home;

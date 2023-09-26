import { Helmet } from 'react-helmet-async';

import Blog from './Blog';
import CallToAction from './CallToAction';
import Hero from './Hero';
import Member from './OurTeam';
import OurGuarantee from './OurGuarantee';
import OurServices from './OurServices';
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
    <Member />
    <CallToAction />
    <Blog />
  </main>
);

export default Home;

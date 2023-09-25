import { Helmet } from 'react-helmet-async';

import CallToAction from '~/components/CallToAction';
import Hero from './Hero';
import Info from './Info';

const About = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
    <Info />
    <CallToAction />
  </main>
);

export default About;

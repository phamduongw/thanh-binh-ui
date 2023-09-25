import { Helmet } from 'react-helmet-async';

import Hero from './Hero';

const Contact = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
  </main>
);

export default Contact;

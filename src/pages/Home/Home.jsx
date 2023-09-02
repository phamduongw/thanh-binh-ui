import { Helmet } from 'react-helmet-async';

import Hero from './Hero';

const Home = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Hero />
  </main>
);

export default Home;

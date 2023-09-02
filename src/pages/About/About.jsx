import { Helmet } from 'react-helmet-async';

const About = ({ title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    About
  </main>
);

export default About;

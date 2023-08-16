import { Helmet } from 'react-helmet-async';

const About = ({ title }) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      About
    </main>
  );
};

export default About;

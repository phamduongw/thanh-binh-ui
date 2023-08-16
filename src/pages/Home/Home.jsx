import { Helmet } from 'react-helmet-async';

const Home = ({ title }) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      Home
    </main>
  );
};

export default Home;

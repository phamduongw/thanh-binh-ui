import usePageTitle from '~/hooks/usePageTitle';

const Home = ({ title }) => {
  usePageTitle(title);
  return <main>Home</main>;
};

export default Home;

import Welcome from './Welcome';
import LogoSwiper from './LogoSwiper';
import Cards from './Cards';

const Home = () => {
  return (
    <div className='h-[200vh]'>
      <Welcome />
      <LogoSwiper />
      <Cards />
    </div>
  );
};

export default Home;

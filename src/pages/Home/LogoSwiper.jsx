import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavButtons from '../../components/SwiperNavButton';
import 'swiper/css';
import { AppContext } from '../../context/AppContext';

const ids = [1, 2, 3, 4, 5, 6];

const LogoSwiper = () => {
  const { screenSize } = useContext(AppContext);

  return (
    <div className='xl:w-[1140px] lg:w-[940px] md:w-[720px] w-[94vw] max-md:mt-[15vw] mt-[5vw] mx-auto group'>
      <Swiper grabCursor={true} slidesPerView={screenSize}>
        {ids.map((item) => (
          <SwiperSlide key={item}>
            <img
              src={`images/brand-${item}.png`}
              alt=''
              className='mx-auto transition-opacity duration-300 opacity-40 hover:opacity-100 xl:h-[99.78px] lg:h-[80.96px] md:h-[106.68px]'
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default LogoSwiper;

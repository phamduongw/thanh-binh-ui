import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import SwiperNavButtons from '../../components/SwiperNavButton';

const ids = [1, 2, 3, 4, 5, 6];

const LogoSwiper = () => {
  return (
    <div className='w-[1140px] mt-[6vw] mx-auto group'>
      <Swiper grabCursor={true} slidesPerView={5}>
        {ids.map((item) => (
          <SwiperSlide key={item} className='opacity-40 hover:opacity-100'>
            <img src={`images/brand-${item}.png`} alt='' className='mx-auto' />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
};

export default LogoSwiper;

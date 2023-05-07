import { useSwiper } from 'swiper/react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const handleSwipePrev = () => {
    if (swiper.activeIndex === 0) {
      swiper.slideNext();
    } else {
      swiper.slidePrev();
    }
  };
  const handleSwipeNext = () => {
    if (swiper.activeIndex + 1 === swiper.snapGrid.length) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };
  return (
    <div className='absolute top-0 h-full flex items-center justify-between w-full'>
      <div className='swiper-nav-button' onClick={handleSwipePrev}>
        <BsArrowLeftShort color='#FCFCFF' size={20} />
      </div>
      <div className='swiper-nav-button' onClick={handleSwipeNext}>
        <BsArrowRightShort color='#FCFCFF' size={20} />
      </div>
    </div>
  );
};

export default SwiperNavButtons;

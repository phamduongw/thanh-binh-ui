import { useCallback, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import classNames from 'classnames/bind';
import styles from './OurTeam.module.scss';

import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import MEMBERS from '~/data/MEMBERS';

const cx = classNames.bind(styles);

const Carousel = () => {
  const swiperRef = useRef();

  const handleStopAutoPlay = useCallback(() => {
    swiperRef.current.swiper.autoplay.stop();
  }, [swiperRef]);

  const handleStartAutoPlay = useCallback(() => {
    swiperRef.current.swiper.autoplay.start();
  }, [swiperRef]);

  return (
    <div
      onMouseEnter={handleStopAutoPlay}
      onMouseLeave={handleStartAutoPlay}
      className={cx('wrapper')}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={25}
        speed={800}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {MEMBERS.map(({ srcSet, src, name, position }, index) => (
          <SwiperSlide key={index} className={cx('slide')}>
            <Image w100 srcSet={srcSet} src={src} alt="member-image" />
            <div className={cx('slide-overlay')}>
              <div className={cx('text-wrap')}>
                <div className={cx('name')}>{name}</div>
                <div>{position}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const OurTeam = () => (
  <section className="section-container-flex normal-padding align-center">
    <div className="section-heading text-center">
      <div className="section-title">Ban giám đốc</div>
      <h2>Đội ngũ lãnh đạo của chúng tôi</h2>
      <Paragraph gray71>
        Ban giám đốc đã đóng góp không nhỏ vào sự phát triển và thành công của
        tổ chức chúng tôi, hãy cùng gặp gỡ và hiểu thêm về họ dưới đây.
      </Paragraph>
    </div>
    <Carousel />
  </section>
);

export default OurTeam;

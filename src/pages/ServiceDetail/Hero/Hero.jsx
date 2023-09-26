import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import { v4 as uuidv4 } from 'uuid';

import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import config from '~/config';

const cx = classNames.bind(styles);

const Hero = ({ icon: Icon, title, subtitle, descriptions, products }) => (
  <section
    className={cx(
      'section-container-grid',
      'thin-bottom-padding',
      'grid-layout',
    )}
  >
    <div className={cx('content')}>
      <div className={cx('heading')}>
        <Icon width={48} />
        <h1>{title}</h1>
        <Paragraph>{subtitle}</Paragraph>
      </div>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index} className={cx('desc-item')}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
    <Swiper
      key={uuidv4()}
      spaceBetween={25}
      speed={500}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className={cx('slider')}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className={cx('slide')}>
          <Image
            w100
            src={product}
            alt="product-image"
            className={cx('product-image')}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className={cx('price')}>
      <div className={cx('text-wrap')}>
        <div>Chi phí</div>
        <div>Liên hệ</div>
      </div>
      <Button to={config.routes.contact.path} button primary>
        Nhận báo giá
      </Button>
    </div>
  </section>
);

export default Hero;

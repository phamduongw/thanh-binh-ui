import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import classNames from 'classnames/bind';
import styles from './OurCustomer.module.scss';

import customer_1 from '~/assets/images/home/customer_1.webp';
import customer_2 from '~/assets/images/home/customer_2.webp';
import customer_3 from '~/assets/images/home/customer_3.webp';
import customer_4 from '~/assets/images/home/customer_4.webp';
import customer_5 from '~/assets/images/home/customer_5.webp';
import customer_6 from '~/assets/images/home/customer_6.webp';

const CUSTOMERS = [
  customer_1,
  customer_2,
  customer_3,
  customer_4,
  customer_5,
  customer_6,
  customer_1,
  customer_2,
  customer_3,
  customer_4,
  customer_5,
  customer_6,
];

const cx = classNames.bind(styles);

const OurCustomer = () => (
  <section className="section-container-flex thin-bottom-padding align-center">
    <div className="section-heading text-center">
      <div className="section-title">Khách hàng</div>
      <h2>Đối tác của Thanh Bình</h2>
      <Paragraph>
        Hãy cùng khám phá về các đối tác, khách hàng của chúng tôi và cách chúng
        tôi đã đóng góp vào sự thành công của họ.
      </Paragraph>
    </div>
    <Swiper
      slidesPerView={2}
      speed={600}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
      }}
      className={cx('slider')}
    >
      {CUSTOMERS.map((customer, index) => (
        <SwiperSlide key={index} className={cx('slide')}>
          <div>
            <Image w100 src={customer} alt="customer-image" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default OurCustomer;

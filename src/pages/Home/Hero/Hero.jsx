import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import hero500 from '~/assets/images/home/hero500.png';
import hero800 from '~/assets/images/home/hero800.png';
import hero1204 from '~/assets/images/home/hero1204.png';

import config from '~/config';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('thin-top-padding', 'wrapper')}>
    <div className={cx('heading')}>
      <div className={cx('text-wrap')}>
        <h1>
          <span>Nghệ thuật in ấn</span> hoàn hảo cho doanh nghiệp của bạn
        </h1>
        <Paragraph large gray71>
          Hãy để chúng tôi giúp bạn đưa thông điệp của mình đến với đối tượng
          mục tiêu một cách chính xác và hiệu quả.
        </Paragraph>
      </div>
      <div className={cx('btn-wrap')}>
        <Button to={config.routes.contact.path} button primary>
          Nhận báo giá
        </Button>
        <Button to={config.routes.about.path} button secondary>
          Thăm quan xưởng in
        </Button>
      </div>
    </div>
    <img
      srcSet={`${hero500} 500w, ${hero800} 800w, ${hero1204} 1204w`}
      sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 602px, 47vw"
      src={hero1204}
      alt="hero"
    />
  </section>
);

export default Hero;

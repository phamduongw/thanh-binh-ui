import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import hero_500 from '~/assets/images/home/hero_500.png';
import hero_800 from '~/assets/images/home/hero_800.png';
import hero_1204 from '~/assets/images/home/hero_1204.png';

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
    <Image
      srcSet={`${hero_500} 500w, ${hero_800} 800w, ${hero_1204} 1204w`}
      sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 602px, 47vw"
      src={hero_1204}
      alt="hero"
      className={cx('hero-image')}
    />
  </section>
);

export default Hero;

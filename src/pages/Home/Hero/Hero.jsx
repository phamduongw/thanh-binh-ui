import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import hero from '~/assets/images/home/hero.webp';

import config from '~/config';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('thin-top-padding', 'wrapper')}>
    <div className={cx('heading')}>
      <div className={cx('text-wrap')}>
        <h1>
          <span>Nghệ thuật in ấn</span> hoàn hảo dành cho doanh nghiệp của bạn
        </h1>
        <Paragraph large gray71>
          Hãy để chúng tôi giúp bạn đưa thông điệp của mình đến với khách hàng
          một cách chính xác và hiệu quả.
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
    <Image src={hero} alt="hero" className={cx('hero-image')} />
  </section>
);

export default Hero;

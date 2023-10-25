import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import ModalVideo from '~/components/ModalVideo';
import Paragraph from '~/components/Paragraph';

import about_500 from '~/assets/images/about/about_500.webp';
import about_800 from '~/assets/images/about/about_800.webp';
import about_1080 from '~/assets/images/about/about_1080.webp';
import about_1600 from '~/assets/images/about/about_1600.webp';

const STATS = [
  {
    number: '25+',
    text: 'năm phục vụ',
  },
  {
    number: '150+',
    text: 'nhân viên',
  },
  {
    number: '1',
    text: 'địa điểm',
  },
];

const cx = classNames.bind(styles);

const Hero = () => (
  <section className="thin-padding">
    <div className="section-container-flex align-center">
      <div className="section-heading text-center">
        <div className="section-title">Về chúng tôi</div>
        <h1>Thanh Binh Printing</h1>
        <Paragraph gray71>
          Thanh Bình là một doanh nghiệp in ấn với hơn 20 năm kinh nghiệm. Chúng
          tôi luôn cam kết mang đến những sản phẩm chất lượng cho khách hàng.
        </Paragraph>
      </div>
      <ModalVideo
        w100
        srcSet={`${about_500} 500w, ${about_800} 800w, ${about_1080} 1080w, ${about_1600} 1600w`}
        sizes="100vw"
        posterSrc={about_1600}
        videoSrc="https://www.youtube.com/embed/xfCJF1NhXdA?si=8jZi9ha4RB6lOb8i"
        isFeatureDisable={true}
      />
      <div className={cx('stats-wrap')}>
        {STATS.map(({ number, text }) => (
          <div key={text} className={cx('stats')}>
            <div className={cx('stats-number')}>{number}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

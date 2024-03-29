import classNames from 'classnames/bind';
import styles from './OurWork.module.scss';

import Button from '~/components/Button';
import ModalVideo from '~/components/ModalVideo';
import Paragraph from '~/components/Paragraph';

import { CheckIcon } from '~/components/Icons';

import poster_500 from '~/assets/images/home/poster_500.webp';
import poster_800 from '~/assets/images/home/poster_800.webp';
import poster_1080 from '~/assets/images/home/poster_1080.webp';

import config from '~/config';

const cx = classNames.bind(styles);

const CHECKS = ['Chất lượng', 'Nhanh chóng', 'Trách nhiệm'];

const Detail = () => (
  <div className={cx('work-detail')}>
    <div className="section-heading">
      <div className="section-title">Về chúng tôi</div>
      <h2>Chặng đường 25 năm để thay đổi, hòa nhập và phát triển toàn diện</h2>
      <Paragraph gray71>
        Nhờ những thay đổi này, Thanh Bình đã và đang tiếp tục phát triển để đưa
        ra những sản phẩm in ấn chất lượng cao, đáp ứng mọi nhu cầu của khách
        hàng.
      </Paragraph>
    </div>
    <div className={cx('check-wrap')}>
      {CHECKS.map((item) => (
        <div key={item} className={cx('check-block')}>
          <CheckIcon />
          <span>{item}</span>
        </div>
      ))}
    </div>
    <Button to={config.routes.about.path} button primary>
      Tìm hiểu thêm
    </Button>
  </div>
);

const OurWork = () => (
  <section className="section-wrapper">
    <div
      className={cx('section-container-grid', 'normal-padding', 'grid-layout')}
    >
      <Detail />
      <ModalVideo
        h100
        srcSet={`${poster_500} 500w, ${poster_800} 800w, ${poster_1080} 1080w`}
        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 711px"
        posterSrc={poster_1080}
        videoSrc="https://www.youtube.com/embed/_cWvRzt6Dpk?si=hH6cBgVn0dBIPfT1"
      />
    </div>
  </section>
);

export default OurWork;

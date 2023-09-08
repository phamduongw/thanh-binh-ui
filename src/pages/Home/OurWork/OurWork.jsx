import classNames from 'classnames/bind';
import styles from './OurWork.module.scss';

import Button from '~/components/Button';
import ModalVideo from '~/components/ModalVideo';
import Paragraph from '~/components/Paragraph';

import { CheckIcon } from '~/components/Icons';

import poster500 from '~/assets/images/home/poster500.jpg';
import poster800 from '~/assets/images/home/poster800.jpg';
import poster1080 from '~/assets/images/home/poster1080.jpg';

import config from '~/config';

const cx = classNames.bind(styles);

const CHECKS = ['Midtown', 'City Center', 'The River Front'];

const Detail = () => (
  <div className={cx('work-detail')}>
    <div className="section-heading">
      <div className="section-title">Our Work</div>
      <h2>Discover the Location that Best Fits Your Business Needs</h2>
      <Paragraph gray71>
        Vestibulum ornare ipsum sapien, vitae mollis augue fringilla sit amet.
        Donec et mauris et arcu venenatis aliquam non ut dui.
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
    <Button to={config.routes.location.path} button primary>
      View Location
    </Button>
  </div>
);

const OurWork = () => (
  <section className="section-wrapper">
    <div className={cx('section-container', 'grid-layout')}>
      <Detail />
      <ModalVideo
        srcSet={`${poster500} 500w, ${poster800} 800w, ${poster1080} 1080w`}
        sizes="(max-width: 479px) 92vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, 711px"
        posterSrc={poster1080}
        posterClassName={cx('poster-size')}
        videoSrc="https://www.youtube.com/embed/_cWvRzt6Dpk?si=hH6cBgVn0dBIPfT1"
      />
    </div>
  </section>
);

export default OurWork;

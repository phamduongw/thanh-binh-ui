import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import ModalVideo from '~/components/ModalVideo';
import Paragraph from '~/components/Paragraph';

import about_500 from '~/assets/images/about/about-500.jpg';
import about_800 from '~/assets/images/about/about-800.jpg';
import about_1080 from '~/assets/images/about/about-1080.jpg';
import about_1600 from '~/assets/images/about/about-1600.jpg';

const STATS = [
  {
    number: '10+',
    text: 'years of service',
  },
  {
    number: '200+',
    text: 'happy members',
  },
  {
    number: '3',
    text: 'locations across the city',
  },
];

const cx = classNames.bind(styles);

const Hero = () => (
  <section className="thin-padding">
    <div className="section-container-flex align-center">
      <div className="section-heading text-center">
        <div className="section-title">About Us</div>
        <h1>About Serviced Office</h1>
        <Paragraph gray71>
          Pellentesque leo risus, rhoncus vel nulla quis, commodo pellentesque
          sem. Nam iaculis auctor urna, nec ornare ex congue non.
        </Paragraph>
      </div>
      <ModalVideo
        w100
        srcSet={`${about_500} 500w, ${about_800} 800w, ${about_1080} 1080w, ${about_1600} 1600w`}
        sizes="100vw"
        posterSrc={about_1600}
        videoSrc="https://www.youtube.com/embed/xfCJF1NhXdA?si=8jZi9ha4RB6lOb8i"
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

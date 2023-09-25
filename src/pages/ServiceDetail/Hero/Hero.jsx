import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import config from '~/config';

const cx = classNames.bind(styles);

const Hero = ({ icon: Icon, title, subtitle, descriptions, srcSet, src }) => (
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
    <Image
      h100
      srcSet={srcSet}
      sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 45vw"
      src={src}
      alt={'hero-image'}
      className={cx('hero-image')}
    />
    <div className={cx('price')}>
      <div className={cx('text-wrap')}>
        <div>Starting at only</div>
        <div>$900 per month</div>
      </div>
      <Button to={config.routes.contact.path} button primary>
        Get a Quote
      </Button>
    </div>
  </section>
);

export default Hero;

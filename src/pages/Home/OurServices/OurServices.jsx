import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './OurServices.module.scss';

import Paragraph from '~/components/Paragraph';

import { ChevronRightIcon } from '~/components/Icons';

import SERVICES from '~/data/SERVICES';

const cx = classNames.bind(styles);

const ServiceList = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('service-list')}>
      {SERVICES.map(({ to, icon: Icon, title, subtitle }) => (
        <article
          key={to}
          onClick={() => {
            navigate(to);
          }}
          className={cx('service-card')}
        >
          <div className={cx('card-detail')}>
            <div className={cx('card-heading')}>
              <Icon width={56} />
              <h3>{title}</h3>
            </div>
            <Paragraph gray71>{subtitle}</Paragraph>
          </div>
          <div className={cx('learn-more-wrap')}>
            <div>Learn More</div>
            <ChevronRightIcon />
          </div>
        </article>
      ))}
    </div>
  );
};

const OurServices = () => (
  <section className={cx('wrapper')}>
    <div className={cx('content')}>
      <div className={cx('heading')}>
        <div className={cx('section-title')}>Our Services</div>
        <h2>
          Flexible Solutions for Your Business - Choose What Works Best for You
        </h2>
      </div>
      <ServiceList />
    </div>
  </section>
);

export default OurServices;

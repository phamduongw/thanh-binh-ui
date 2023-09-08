import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './OurServices.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import { ChevronRightIcon } from '~/components/Icons';

import SERVICES from '~/data/SERVICES';

import config from '~/config';

const cx = classNames.bind(styles);

const ServiceCard = ({ icon: Icon, title, subtitle, handleViewDetail }) => (
  <article onClick={handleViewDetail} className={cx('card', 'service-card')}>
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
);

const ServiceList = () => {
  const navigate = useNavigate();
  return (
    <div className={cx('service-list')}>
      {SERVICES.map(({ to, icon, title, subtitle }) => (
        <ServiceCard
          key={to}
          icon={icon}
          title={title}
          subtitle={subtitle}
          handleViewDetail={() => {
            navigate(to);
          }}
        />
      ))}
    </div>
  );
};

const OurServices = () => (
  <section className="section-wrapper">
    <div className={cx('content')}>
      <div className="section-heading text-center">
        <div className="section-title">Our Services</div>
        <h2>
          Flexible Solutions for Your Business - Choose What Works Best for You
        </h2>
      </div>
      <ServiceList />
      <Button to={config.routes.services.path} button primary>
        View All Services
      </Button>
    </div>
  </section>
);

export default OurServices;

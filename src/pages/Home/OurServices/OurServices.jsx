import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './OurServices.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import { RightChevronIcon } from '~/components/Icons';

import SERVICES from '~/data/SERVICES';

import config from '~/config';

const cx = classNames.bind(styles);

const ServiceCard = ({ icon: Icon, title, subtitle, handleLearnMore }) => (
  <article
    onClick={handleLearnMore}
    className={cx('card', 'card-effect', 'service-card')}
  >
    <div className={cx('card-detail')}>
      <div className={cx('card-heading')}>
        <Icon width={56} />
        <h3>{title}</h3>
      </div>
      <Paragraph gray71>{subtitle}</Paragraph>
    </div>
    <div className={cx('learn-more-wrap')}>
      <div>Tìm hiểu thêm</div>
      <RightChevronIcon width={20} />
    </div>
  </article>
);

const ServiceList = () => {
  const navigate = useNavigate();
  return (
    <div className="collection">
      {SERVICES.map(({ to, icon, title, subtitle }) => (
        <ServiceCard
          key={to}
          icon={icon}
          title={title}
          subtitle={subtitle}
          handleLearnMore={() => {
            navigate(to);
          }}
        />
      ))}
    </div>
  );
};

const OurServices = () => (
  <section className="section-wrapper">
    <div className={cx('section-container-flex', 'content')}>
      <div className="section-heading text-center">
        <div className="section-title">Dịch vụ</div>
        <h2>
          Giải pháp in ấn linh hoạt - Hãy lựa chọn dich vụ phù hợp nhất với bạn
        </h2>
      </div>
      <ServiceList />
      <Button to={config.routes.services.path} button primary>
        Tất cả dịch vụ
      </Button>
    </div>
  </section>
);

export default OurServices;

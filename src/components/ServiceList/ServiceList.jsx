import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './ServiceList.module.scss';

import Paragraph from '~/components/Paragraph';

import { RightChevronIcon } from '~/components/Icons';

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

const ServiceList = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="collection">
      {data.map(({ id, to, icon, title, subtitle }) => (
        <ServiceCard
          key={id}
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

export default ServiceList;

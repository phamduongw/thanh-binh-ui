import classNames from 'classnames/bind';
import styles from './OurServices.module.scss';

import Button from '~/components/Button';
import ServiceList from '~/components/ServiceList';

import config from '~/config';

const cx = classNames.bind(styles);

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

import classNames from 'classnames/bind';
import styles from './CallToAction.module.scss';

import Button from '~/components/Button';

import { CallToActionIcon } from '~/components/Icons';

import config from '~/config';

const cx = classNames.bind(styles);

const CallToAction = () => (
  <section className="container thin-padding">
    <div className={cx('wrapper')}>
      <CallToActionIcon className={cx('cta-icon')} />
      <div className={cx('heading')}>
        <h2>Phát triển doanh nghiệp cùng chúng tôi ngay hôm nay</h2>
        <Button to={config.routes.contact.path} button primary>
          Liên hệ với Thanh Bình
        </Button>
      </div>
    </div>
  </section>
);

export default CallToAction;

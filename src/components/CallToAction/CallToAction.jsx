import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './CallToAction.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import config from '~/config';

const cx = classNames.bind(styles);

const CallToAction = memo(() => (
  <section className="container thin-top-padding">
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h2>Kết nối hợp tác</h2>
        <Paragraph large>
          Chúng tôi rất sẵn lòng khi được trò chuyện, phục vụ và giải đáp các
          thắc mắc của bạn về dịch vụ in ấn!
        </Paragraph>
        <Button to={config.routes.contact.path} button primary fit>
          Liên hệ với Thanh Bình
        </Button>
      </div>
    </div>
  </section>
));

CallToAction.displayName = 'CallToAction';

export default CallToAction;

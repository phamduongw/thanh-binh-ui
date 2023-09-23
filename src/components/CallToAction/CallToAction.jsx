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
        <h2>Drop us a line</h2>
        <Paragraph large>
          Interested? We will be very delighted to talk to you about our
          services, pricing, and availability.
        </Paragraph>
        <Button to={config.routes.contact.path} button primary fit>
          Let's Get in Touch
        </Button>
      </div>
    </div>
  </section>
));

CallToAction.displayName = 'CallToAction';

export default CallToAction;

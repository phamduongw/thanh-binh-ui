import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './Actions.module.scss';

import Button from '~/components/Button';

import { PhoneIcon } from '~/components/Icons';

import config from '~/config';

const cx = classNames.bind(styles);

const Actions = memo(({ desktop, responsive, handleCloseMenu }) => (
  <div
    className={cx({
      desktop,
      responsive,
    })}
  >
    <Button
      to="tel:+84 979-336-872"
      onClick={handleCloseMenu}
      className={cx('contact')}
    >
      <PhoneIcon width={24} />
      <span>+84 979-336-872</span>
    </Button>
    <Button
      to={config.routes.contact.path}
      button
      primary
      small
      onClick={handleCloseMenu}
    >
      Nhận tư vấn
    </Button>
  </div>
));

Actions.displayName = 'Actions';

export default Actions;

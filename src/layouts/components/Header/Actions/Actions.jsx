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
      to={config.routes.contact.path}
      className={cx('contact')}
      onClick={handleCloseMenu}
    >
      <PhoneIcon />
      <span>+1 234-567-8910</span>
    </Button>
    <Button
      to={config.routes.contact.path}
      button
      primary
      small
      onClick={handleCloseMenu}
    >
      Enquire
    </Button>
  </div>
));

Actions.displayName = 'Actions';

export default Actions;

import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './NavLink.module.scss';

import Button from '~/components/Button';

import config from '~/config';

const NAV_LINK_ITEMS = [
  {
    to: config.routes.location.path,
    name: config.routes.location.title,
  },
  {
    to: config.routes.about.path,
    name: config.routes.about.title,
  },
  {
    to: config.routes.blog.path,
    name: config.routes.blog.title,
  },
];

const cx = classNames.bind(styles);

const NavLink = memo(({ pathname, handleCloseMenu }) =>
  NAV_LINK_ITEMS.map(({ to, name }) => (
    <Button
      key={to}
      to={to}
      onClick={handleCloseMenu}
      className={cx('link', {
        'highlight-blue-43': to == pathname,
      })}
    >
      {name}
    </Button>
  )),
);

NavLink.displayName = 'NavLink';

export default NavLink;

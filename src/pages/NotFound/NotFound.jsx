import { Helmet } from 'react-helmet-async';

import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

import Button from '~/components/Button';

import { NotFoundIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const NotFound = () => (
  <div className={cx('wrapper')}>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <div className={cx('container')}>
      <div className={cx('title')}>
        <NotFoundIcon />
        <h2>Page Not Found</h2>
      </div>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <Button to="/" button primary>
        Return Home
      </Button>
    </div>
  </div>
);

export default NotFound;

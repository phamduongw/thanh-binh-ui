import { Helmet } from 'react-helmet-async';

import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import { NotFoundIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const NotFound = ({ title }) => (
  <div className={cx('wrapper')}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className={cx('container')}>
      <div className={cx('title')}>
        <NotFoundIcon />
        <h2>Page Not Found</h2>
      </div>
      <Paragraph>
        The page you are looking for doesn't exist or has been moved
      </Paragraph>
      <Button to="/" button primary>
        Return Home
      </Button>
    </div>
  </div>
);

export default NotFound;

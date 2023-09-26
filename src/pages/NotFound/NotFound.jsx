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
        <h2>Không tìm thấy nội dung</h2>
      </div>
      <Paragraph>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị thay đổi đường dẫn
      </Paragraph>
      <Button to="/" button primary>
        Trở về trang chủ
      </Button>
    </div>
  </div>
);

export default NotFound;

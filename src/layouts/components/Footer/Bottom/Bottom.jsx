import classNames from 'classnames/bind';
import styles from './Bottom.module.scss';

import Button from '~/components/Button';
import Logo from '~/components/Logo';
import Paragraph from '~/components/Paragraph';

import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '~/components/Icons';

import config from '~/config';

const SOCIALS = [
  {
    to: '/1',
    icon: TwitterIcon,
  },
  {
    to: '/2',
    icon: FacebookIcon,
  },
  {
    to: '/3',
    icon: InstagramIcon,
  },
  {
    to: '/4',
    icon: LinkedInIcon,
  },
  {
    to: '/5',
    icon: YoutubeIcon,
  },
];

const PAGES = [
  {
    to: config.routes.home.path,
    title: config.routes.home.title,
  },
  {
    to: config.routes.about.path,
    title: config.routes.about.title,
  },
  {
    to: config.routes.services.path,
    title: config.routes.services.title,
  },
  {
    to: config.routes.contact.path,
    title: config.routes.contact.title,
  },
  {
    to: config.routes.blog.path,
    title: config.routes.blog.title,
  },
  {
    to: '/1',
    title: 'Giấy phép',
  },
  {
    to: '/2',
    title: 'Chính sách',
  },
  {
    to: '/3',
    title: 'Bảo mật',
  },
];

const cx = classNames.bind(styles);

const Left = () => (
  <div className={cx('left')}>
    <Logo />
    <Paragraph>
      ⓒ Thanh Binh Printing.
      <br />
      Built by{' '}
      <Button to={'/'} className={cx('link-item')}>
        Pham Duong
      </Button>
      . Powered by{' '}
      <Button to={'/'} className={cx('link-item')}>
        JMaster
      </Button>
      .
    </Paragraph>
    <div className={cx('social-wrap')}>
      {SOCIALS.map(({ to, icon: Icon }) => (
        <Button key={to} className={cx('social-item')}>
          <Icon />
        </Button>
      ))}
    </div>
  </div>
);

const Right = () => (
  <div className={cx('link-group')}>
    <div className="footer-title">Thanh Bình</div>
    <div className={cx('link-wrap')}>
      {PAGES.map(({ to, title }) => (
        <Button key={to} to={to} className={cx('link-item')}>
          {title}
        </Button>
      ))}
    </div>
  </div>
);

const Bottom = () => (
  <div className={cx('wrapper')}>
    <Left />
    <Right />
  </div>
);

export default Bottom;

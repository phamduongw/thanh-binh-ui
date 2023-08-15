import classNames from 'classnames/bind';
import styles from './Bottom.module.scss';

import Button from '~/components/Button';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
} from '~/components/Icons';
import Logo from '~/components/Logo';
import Paragraph from '~/components/Paragraph';

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
    to: '/1',
    title: 'Home',
  },
  {
    to: '/2',
    title: 'About',
  },
  {
    to: '/3',
    title: 'Services',
  },
  {
    to: '/4',
    title: 'Contact',
  },
  {
    to: '/5',
    title: 'Services Single',
  },
  {
    to: '/6',
    title: 'Blog',
  },
  {
    to: '/7',
    title: 'Location',
  },
  {
    to: '/8',
    title: 'Blog Post',
  },
  {
    to: '/9',
    title: 'Location Single',
  },
  {
    to: '/10',
    title: 'More Templates',
  },
];

const UTILITIES = [
  {
    to: '/1',
    title: 'Style Guide',
  },
  {
    to: '/2',
    title: 'Licenses',
  },
  {
    to: '/3',
    title: 'Changelog',
  },
  {
    to: '/4',
    title: '404',
  },
  {
    to: '/5',
    title: 'Password',
  },
];

const cx = classNames.bind(styles);

const Left = () => (
  <div className={cx('left')}>
    <Logo />
    <Paragraph>
      ⓒ Serviced Office.
      <br />
      Built by{' '}
      <Button to={'/'} className={cx('link-item')}>
        Salmon Pixel
      </Button>
      . Powered by{' '}
      <Button to={'/'} className={cx('link-item')}>
        Webflow
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
  <div className={cx('right')}>
    <div className={cx('link-group')}>
      <div className="title">Pages</div>
      <div className={cx('link-wrap')}>
        {PAGES.map(({ to, title }) => (
          <Button key={to} to={to} className={cx('link-item')}>
            {title}
          </Button>
        ))}
      </div>
    </div>
    <div className={cx('link-group')}>
      <div className="title">Utility</div>
      <div className={cx('link-column')}>
        {UTILITIES.map(({ to, title }) => (
          <Button key={to} to={to} className={cx('link-item')}>
            {title}
          </Button>
        ))}
      </div>
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

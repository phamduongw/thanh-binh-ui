import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Hero.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import CONTACTS from '~/data/CONTACTS';

const INPUTS = [
  {
    title: 'Họ và tên*',
    type: 'text',
  },
  {
    title: 'Địa chỉ email*',
    type: 'email',
  },
  {
    title: 'Số điện thoại*',
    type: 'text',
  },
];

const cx = classNames.bind(styles);

const Form = () => {
  const formRef = useRef();

  const [buttonTitle, setButtonTitle] = useState('Gửi yêu cầu');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setButtonTitle('Vui lòng chờ đợi...');
    setTimeout(() => {
      setButtonTitle('Chúng tôi đã nhận được yêu cầu. Cảm ơn bạn!');
    }, 3000);
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={cx('form')}>
      {INPUTS.map(({ title, type }) => (
        <label key={title} className={cx('field')}>
          <span>{title}</span>
          <input type={type} required />
        </label>
      ))}
      <label className={cx('field')}>
        <span>Lời nhắn*</span>
        <textarea maxLength="1000" className={cx('message-field')} required />
      </label>
      <Button button primary>
        {buttonTitle}
      </Button>
      <div
        className={cx('form-overlay', {
          hidden: !isSubmitted,
        })}
      />
    </form>
  );
};

const Hero = () => (
  <section
    className={cx('section-container-grid', 'normal-padding', 'grid-layout')}
  >
    <div className={cx('info')}>
      <div className="section-heading">
        <div className="section-title">Liên hệ</div>
        <h1>Kết nối ngay hôm nay</h1>
        <Paragraph gray71>
          Để nhận được sự tư vấn chính xác và có cơ hội sở hữu những ưu đãi độc
          quyền!
        </Paragraph>
      </div>
      <div className={cx('content')}>
        {CONTACTS.map(({ icon: Icon, to, target, title, content }) => (
          <Button
            key={title}
            to={to}
            target={target}
            className={cx('info-card')}
          >
            <Icon className={cx('card-icon')} />
            <div className={cx('card-title')}>{title}</div>
            <div className={cx('card-content')}>{content}</div>
          </Button>
        ))}
      </div>
    </div>
    <Form />
  </section>
);

export default Hero;

import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Top.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import { SendIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Form = () => {
  const formRef = useRef();
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setTimeout(() => {
      setIsMessageVisible(true);
    }, 500);
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={cx('form')}>
      <input
        type="email"
        placeholder="Email của bạn"
        style={{
          borderColor: isMessageVisible && 'transparent',
        }}
      />
      <Button className={cx('send-btn')}>
        <SendIcon />
      </Button>
      <div
        className={cx('message', {
          hidden: !isMessageVisible,
        })}
      >
        Chúng tôi đã nhận được yêu cầu. Cảm ơn bạn!
      </div>
    </form>
  );
};

const Top = () => (
  <div className={cx('wrapper')}>
    <div className="footer-title">Đăng ký theo dõi</div>
    <Paragraph gray9c>
      Đăng ký để nhận tin tức và chương trình khuyến mãi mới nhất của chúng tôi!
    </Paragraph>
    <Form />
  </div>
);

export default Top;

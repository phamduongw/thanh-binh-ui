import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Top.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';
import { SendIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Form = () => {
  const formRef = useRef();
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setTimeout(() => {
      setIsMessageOpen(true);
    }, 500);
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={cx('form')}>
      <input
        type="email"
        placeholder="Your Email"
        style={{
          borderColor: isMessageOpen && 'transparent',
        }}
      />
      <Button className={cx('send-btn')}>
        <SendIcon />
      </Button>
      <div
        className={cx('message', {
          open: isMessageOpen,
        })}
      >
        Thank you! Your submission has been received!
      </div>
    </form>
  );
};

const Top = () => (
  <div className={cx('wrapper')}>
    <div className="title">Subscribe to Our Newsletter</div>
    <Paragraph gray9c>
      Stay in the know! Subscribe for news and our latest promotions!
    </Paragraph>
    <Form />
  </div>
);

export default Top;

import { useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './OurGuarantee.module.scss';

import Paragraph from '~/components/Paragraph';

import { PlusIcon } from '~/components/Icons';

import GUARANTEES from '~/data/GUARANTEES';

import guarantee500 from '~/assets/images/home/guarantee500.jpg';
import guarantee800 from '~/assets/images/home/guarantee800.jpg';
import guarantee1044 from '~/assets/images/home/guarantee1044.jpg';

const cx = classNames.bind(styles);

const GuaranteeCard = ({ icon: Icon, title, content }) => {
  const detailRef = useRef();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    detailRef.current.style.height = `${detailRef.current.scrollHeight}px`;
    const timeoutId = isDetailOpen
      ? setTimeout(setHeightToInitial, 300)
      : setTimeout(disableStyleInline, 0);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isDetailOpen]);

  const setHeightToInitial = useCallback(() => {
    detailRef.current.style.height = 'initial';
  }, []);

  const disableStyleInline = useCallback(() => {
    detailRef.current.style = '';
  }, []);

  const handleClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <article onClick={handleClick} className={cx('card', 'guarantee-card')}>
      <div className={cx('card-header')}>
        <div className={cx('card-heading')}>
          <Icon />
          <span>{title}</span>
        </div>
        <PlusIcon
          className={cx('rotate-animated', {
            rotate: isDetailOpen,
          })}
        />
      </div>
      <div ref={detailRef} className={cx('card-detail')}>
        <Paragraph className={cx('content')}>{content}</Paragraph>
      </div>
    </article>
  );
};

const GuaranteeList = () => (
  <div className={cx('guarantee-list')}>
    {GUARANTEES.map(({ icon, title, content }) => (
      <GuaranteeCard key={title} icon={icon} title={title} content={content} />
    ))}
  </div>
);

const OurGuarantee = () => (
  <section className={cx('wrapper')}>
    <img
      srcSet={`${guarantee500} 500w, ${guarantee800} 800w, ${guarantee1044} 1044w`}
      sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 520px, 46vw"
      src={guarantee1044}
      alt="guarantee"
    />
    <div className={cx('guarantee-detail')}>
      <div className="section-heading">
        <div className="section-title">Our Guarantee</div>
        <h2>Explore the Exclusive Benefits of Our Office Space</h2>
      </div>
      <GuaranteeList />
    </div>
  </section>
);

export default OurGuarantee;

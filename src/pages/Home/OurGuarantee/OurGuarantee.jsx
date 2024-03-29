import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './OurGuarantee.module.scss';

import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import { PlusIcon } from '~/components/Icons';

import GUARANTEES from '~/data/GUARANTEES';

import guarantee_500 from '~/assets/images/home/guarantee_500.jpg';
import guarantee_800 from '~/assets/images/home/guarantee_800.jpg';
import guarantee_1044 from '~/assets/images/home/guarantee_1044.jpg';

const cx = classNames.bind(styles);

const GuaranteeCard = ({ icon: Icon, title, content }) => {
  const detailRef = useRef();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const setHeightToAuto = useCallback(() => {
    detailRef.current.style.height = 'auto';
  }, []);

  const disableStyleInline = useCallback(() => {
    detailRef.current.style = '';
  }, []);

  const handleOpenDetail = () => {
    detailRef.current.style.height = `${detailRef.current.scrollHeight}px`;
    isDetailOpen
      ? setTimeout(disableStyleInline, 0)
      : setTimeout(setHeightToAuto, 300);
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <article
      onClick={handleOpenDetail}
      className={cx('card', 'guarantee-card')}
    >
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
  <section
    className={cx('section-container-grid', 'normal-padding', 'grid-layout')}
  >
    <Image
      w100
      srcSet={`${guarantee_500} 500w, ${guarantee_800} 800w, ${guarantee_1044} 1044w`}
      sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 520px, 46vw"
      src={guarantee_1044}
      alt="guarantee"
      className={cx('rounded-image', 'guarantee-image')}
    />
    <div className={cx('guarantee-detail')}>
      <div className="section-heading">
        <div className="section-title">Sự cam kết</div>
        <h2>Khám phá những lợi ích khi là đối tác của Thanh Bình</h2>
      </div>
      <GuaranteeList />
    </div>
  </section>
);

export default OurGuarantee;

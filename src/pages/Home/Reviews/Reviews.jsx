import { forwardRef, useCallback, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';

import Button from '~/components/Button';
import Paragraph from '~/components/Paragraph';

import { LeftChevronIcon, RightChevronIcon } from '~/components/Icons';

import REVIEWS from '~/data/REVIEWS';

const cx = classNames.bind(styles);

const Navigation = ({ sliderRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlide = useCallback((newSlide) => {
    if (newSlide >= 0 && newSlide < REVIEWS.length) {
      sliderRef.current.style.transform = `translateX(calc((-100% - 24px) * ${newSlide}))`;
      setCurrentSlide(newSlide);
    }
  }, []);

  const handleNextSlide = () => {
    updateSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    updateSlide(currentSlide - 1);
  };

  return (
    <div className={cx('navigation')}>
      <Button onClick={handlePrevSlide} className={cx('chevron-btn')}>
        <LeftChevronIcon />
      </Button>
      <Button onClick={handleNextSlide} className={cx('chevron-btn')}>
        <RightChevronIcon width={24} />
      </Button>
    </div>
  );
};

const SliderCard = ({ brand, content, avatar, name, company }) => (
  <article className={cx('slider-card')}>
    <div className={cx('card', 'card-wrap')}>
      <img src={brand} alt="brand" />
      <Paragraph italic>{content}</Paragraph>
      <div className={cx('card-name')}>
        <img src={avatar} alt="avatar" />
        <div>
          <div className={cx('name')}>{name}</div>
          <div className={cx('company')}>{company}</div>
        </div>
      </div>
    </div>
  </article>
);

const Slider = forwardRef((_, ref) => (
  <div ref={ref} className={cx('slider')}>
    {REVIEWS.map(({ brand, content, avatar, name, company }) => (
      <SliderCard
        key={name}
        brand={brand}
        content={content}
        avatar={avatar}
        name={name}
        company={company}
      />
    ))}
  </div>
));

Slider.displayName = 'Slider';

const Reviews = () => {
  const sliderRef = useRef();
  return (
    <section>
      <div className="section-container-flex">
        <div className="section-heading">
          <div className="section-title">Đánh giá</div>
          <h2>Khách hàng nói gì về Thanh Bình</h2>
        </div>
        <Slider ref={sliderRef} />
        <Navigation sliderRef={sliderRef} />
      </div>
    </section>
  );
};

export default Reviews;

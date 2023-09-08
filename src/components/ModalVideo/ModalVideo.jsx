import { memo, useCallback, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ModalVideo.module.scss';

import Button from '~/components/Button';
import Loading from '~/components/Loading';

import { PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Poster = memo(({ srcSet, sizes, src, handleCloseModal, className }) => (
  <>
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={src}
      alt="poster"
      className={cx('poster', className)}
    />
    <div className={cx('poster-overlay')}>
      <Button
        onClick={handleCloseModal}
        className={cx('svg-animated', 'play-btn')}
      >
        <PlayIcon />
      </Button>
    </div>
  </>
));

Poster.displayName = 'Poster';

const ModalVideo = ({
  srcSet,
  sizes,
  posterSrc,
  posterClassName,
  videoSrc,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoading, setIsLoading] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
    setIsLoading(true);
    document.body.style = 'overflow: hidden; touch-action: none';
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style = '';
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={cx('wrapper')}>
      <Poster
        srcSet={srcSet}
        sizes={sizes}
        src={posterSrc}
        handleCloseModal={handleOpenModal}
        className={posterClassName}
      />
      {isModalOpen && (
        <div onClick={handleCloseModal} className={cx('container')}>
          <iframe
            src={videoSrc}
            title="YouTube video player"
            allowfullscreen="true"
            onLoad={handleLoad}
            style={{ visibility: isIframeLoading && 'hidden' }}
          />
          {isIframeLoading && <Loading />}
        </div>
      )}
    </div>
  );
};

export default ModalVideo;

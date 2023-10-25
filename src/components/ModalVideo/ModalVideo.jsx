import { memo, useCallback, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './ModalVideo.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import Loading from '~/components/Loading';

import { PlayIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const Poster = memo(({ h100, w100, srcSet, sizes, src, handleCloseModal }) => (
  <>
    <Image
      h100={h100}
      w100={w100}
      srcSet={srcSet}
      sizes={sizes}
      src={src}
      alt="poster"
      className="rounded-image"
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
  h100,
  w100,
  srcSet,
  sizes,
  posterSrc,
  videoSrc,
  isFeatureDisable,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIframeLoading, setIsLoading] = useState(false);

  const handleOpenModal = useCallback(() => {
    if (!isFeatureDisable) {
      setIsModalOpen(true);
      setIsLoading(true);
      document.body.style = 'overflow: hidden; touch-action: none';
    }
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
        h100={h100}
        w100={w100}
        srcSet={srcSet}
        sizes={sizes}
        src={posterSrc}
        handleCloseModal={handleOpenModal}
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

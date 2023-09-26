import classNames from 'classnames/bind';
import styles from './OurTeam.module.scss';

import Image from '~/components/Image';
import Paragraph from '~/components/Paragraph';

import MEMBERS from '~/data/MEMBERS';

const cx = classNames.bind(styles);

const OurTeam = () => (
  <section className="section-container-flex thin-top-padding align-center">
    <div className="section-heading text-center">
      <div className="section-title">Ban giám đốc</div>
      <h2>Đội ngũ lãnh đạo</h2>
      <Paragraph gray71>
        Ban giám đốc đã đóng góp không nhỏ vào sự phát triển và thành công của
        tổ chức chúng tôi, hãy cùng gặp gỡ và hiểu thêm về họ dưới đây.
      </Paragraph>
    </div>
    <div className={cx('image-grid')}>
      <div className={cx('column')}>
        <div className={cx('image-wrap')}>
          <Image
            w100
            srcSet={MEMBERS[0].srcSet}
            src={MEMBERS[0].src}
            alt="member-image"
            className={cx('member-image')}
          />
          <div className={cx('slide-overlay')}>
            <div className={cx('text-wrap')}>
              <div className={cx('name')}>{MEMBERS[0].name}</div>
              <div>{MEMBERS[0].position}</div>
            </div>
          </div>
        </div>
        <div className={cx('image-wrap')}>
          <Image
            w100
            srcSet={MEMBERS[2].srcSet}
            src={MEMBERS[2].src}
            alt="member-image"
            className={cx('member-image')}
          />
          <div className={cx('slide-overlay')}>
            <div className={cx('text-wrap')}>
              <div className={cx('name')}>{MEMBERS[2].name}</div>
              <div>{MEMBERS[2].position}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('column')}>
        <div className={cx('image-wrap')}>
          <Image
            w100
            srcSet={MEMBERS[1].srcSet}
            src={MEMBERS[1].src}
            alt="member-image"
            className={cx('member-image')}
          />
          <div className={cx('slide-overlay')}>
            <div className={cx('text-wrap')}>
              <div className={cx('name')}>{MEMBERS[1].name}</div>
              <div>{MEMBERS[1].position}</div>
            </div>
          </div>
        </div>
        <div className={cx('image-wrap')}>
          <Image
            w100
            srcSet={MEMBERS[3].srcSet}
            src={MEMBERS[3].src}
            alt="member-image"
            className={cx('member-image')}
          />
          <div className={cx('slide-overlay')}>
            <div className={cx('text-wrap')}>
              <div className={cx('name')}>{MEMBERS[3].name}</div>
              <div>{MEMBERS[3].position}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurTeam;

import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './MenuButton.module.scss';

import {
  isAnimatedSelector,
  isMenuOpenSelector,
  setIsMenuOpen,
} from '~/redux/slice/headerSlice';

import Button from '~/components/Button';

const ANIMATIONS = [
  ['open-top', 'close-top'],
  ['open-middle', 'close-middle'],
  ['open-bottom', 'close-bottom'],
];

const cx = classNames.bind(styles);

const MenuButton = () => {
  const dispatch = useDispatch();

  const isAnimated = useSelector(isAnimatedSelector);
  const isMenuOpen = useSelector(isMenuOpenSelector);

  const handleToggleMenu = () => {
    dispatch(
      setIsMenuOpen({
        isMenuOpen: !isMenuOpen,
      }),
    );
  };

  return (
    <Button onClick={handleToggleMenu} className={cx('wrapper')}>
      {ANIMATIONS.map(([enable, disable]) => (
        <span
          key={enable}
          className={cx('bar', {
            [`${isMenuOpen ? enable : disable}`]: isAnimated,
          })}
        />
      ))}
    </Button>
  );
};

export default MenuButton;

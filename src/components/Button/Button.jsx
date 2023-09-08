import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      button = false,
      primary = false,
      secondary = false,
      small = false,
      children,
      onClick,
      className,
    },
    ref,
  ) => {
    let Comp = 'button';

    const props = {
      ref,
      onClick,
    };

    if (to) {
      props.to = to;
      Comp = Link;
    }

    const classes = cx({
      button,
      primary,
      small,
      secondary,
      [className]: className,
    });

    return (
      <Comp {...props} className={classes}>
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export default Button;

import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      to,
      button,
      primary,
      secondary,
      small,
      fit,
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
      secondary,
      small,
      fit,
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

import * as React from 'react';
import clsx from 'clsx';
import css from './css.module.scss';


export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  fullScreen?: boolean;
  transparent?: boolean;
  appearance?: 'primary' | 'secondary' | 'sucess' | 'cancel' | 'back';
}

const Button: React.FC<Props> = ({
  disabled,
  fullScreen,
  transparent,
  appearance,
  children,
  type,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(css["button"], {
        [css['-fullScreen']]: fullScreen,
        [css['-transparent']]: transparent,
        [css['-primary']]: appearance === 'primary',
        [css['-secondary']]: appearance === 'secondary',
        [css['-sucess']]: appearance === 'sucess',
        [css['-cancel']]: appearance === 'cancel',
        [css['-back']]: appearance === 'back',
      })}
      {...props}
    >
      <span className={css.text}>
        {children}
      </span>
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  fullScreen: false,
  transparent: false,
  appearance: 'primary',
};

export default Button;
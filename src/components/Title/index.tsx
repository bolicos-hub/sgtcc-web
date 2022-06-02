import React from 'react';
import clsx from 'clsx';
import css from './css.module.scss'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  weight?: 'x-light' | 'light' | 'normal' | 'medium' | 'bold';
  appearance?: 'primary' | 'secondary';
  [key: string]: any;
}

const Title: React.FC<Props> = ({
  size,
  className,
  appearance,
  weight,
  children,
  ...props
}) => {
  const title = "title";

  return (
    <h1
      aria-label={title}
      className={
        clsx(
          css['title'], className, {
          [css['-h1']]: size === 'h1',
          [css['-h2']]: size === 'h2',
          [css['-h3']]: size === 'h3',
          [css['-h4']]: size === 'h4',
          [css['-h5']]: size === 'h5',
          [css['-primary']]: appearance === 'primary',
          [css['-secondary']]: appearance === 'secondary',
          [css['-x-light']]: weight === 'x-light',
          [css['-light']]: weight === 'light',
          [css['-normal']]: weight === 'normal',
          [css['-medium']]: weight === 'medium',
          [css['-bold']]: weight === 'bold',
        }
        )
      }
      {...props}
    >
      {children}
    </h1>

  );
}

Title.defaultProps = {
  size: 'h1',
};

export default Title;
import React from 'react';
import clsx from 'clsx';
import css from './css.module.scss'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
}

const Loader: React.FC<Props> = ({
  show,
  ...props
}) => {
  const loading = "Carregando...";

  return (
    <div
      aria-label={loading}
      className={
        clsx(
          css['loader'], {
          [css['-show']]: show,
        }
        )
      }
      aria-hidden={show}
      {...props}
    />

  );
}

export default Loader;
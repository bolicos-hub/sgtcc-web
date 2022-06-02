import React from 'react';
import clsx from 'clsx';
import css from './css.module.scss'


export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Container: React.FC<Props> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={clsx(css["container"], className)} {...props}>
      {children}
    </div>
  );
}

export default Container;

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss'


export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Row: React.FC<Props> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={clsx(styles["row"], className)} {...props}>
      {children}
    </div>
  );
}

export default Row;

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss'


interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?:
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large';
}

const Space: React.FC<Props> = ({
  size,
  ...props
}) => {
  return (
    <div className={clsx(styles["space"], {
      [styles['-x-small']]: size === 'x-small',
      [styles['-small']]: size === 'small',
      [styles['-medium']]: size === 'medium',
      [styles['-large']]: size === 'large',
      [styles['-x-large']]: size === 'x-large',
    })} {...props} />
  );
}

Space.defaultProps = {
  size: 'medium',
};

export default Space;
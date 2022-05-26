import React, { FC } from 'react';
import type { RowProps } from './Row.types';

const Row: FC<RowProps> = (props) => {
  const {
    children,
    gridRowStart = 'auto',
    gridRowEnd = 'auto',
    className,
  } = props;

  return (
    <div
      style={{
        gridRowStart,
        gridRowEnd,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Row;

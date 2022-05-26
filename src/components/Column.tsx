import React, { FC } from 'react';
import type { ColumnProps } from './Column.types';

const Column: FC<ColumnProps> = (props) => {
  const {
    children,
    gridColumnStart = 'auto',
    gridColumnEnd = 'auto',
    className,
  } = props;
  return (
    <div
      style={{
        gridColumnStart,
        gridColumnEnd,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Column;

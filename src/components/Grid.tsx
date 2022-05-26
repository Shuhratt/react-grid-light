import React, { FC } from 'react';
import type { GridTypes } from './Grid.types';

const Grid: FC<GridTypes<HTMLElement>> = (props) => {
  const {
    columns = 'auto',
    rows = 'auto',
    children,
    className,
    columnGap = 'normal',
    rowGap = 'normal',
  } = props;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(1fr, ${columns}`,
        gridTemplateRows: rows,
        columnGap: `${columnGap}`,
        rowGap: `${rowGap}`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default Grid;

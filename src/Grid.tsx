import React, { FC } from 'react';
import type { GridProps } from './Grid.props';

const Grid: FC<GridProps<HTMLElement>> = (props) => {
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

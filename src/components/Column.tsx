import React, { FC, ReactNode } from 'react';

type ColumnProps = {
  children: ReactNode;
  className?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
};

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

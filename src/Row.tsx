import React, { FC, ReactNode } from 'react';

type RowProps = {
  children: ReactNode;
  className?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
};

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

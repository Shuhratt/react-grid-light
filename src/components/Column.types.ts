import { ReactNode } from 'react';

export type ColumnProps = {
  children: ReactNode;
  className?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
};

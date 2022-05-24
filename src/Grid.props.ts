import { HTMLAttributes, ReactNode } from 'react';

export type GridProps<T> = {
  children: ReactNode;
  columns: number | string;
  columnGap: number | string;
  rowGap: string;
  rows: string;
  className?: string;
} & HTMLAttributes<T>;

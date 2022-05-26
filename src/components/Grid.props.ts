import { HTMLAttributes, ReactNode } from 'react';

export type GridProps<T> = {
  children: ReactNode;
  columns?: number | string;
  rows?: string;
  columnGap?: number | string;
  rowGap?: string;
  className?: string;
} & HTMLAttributes<T>;

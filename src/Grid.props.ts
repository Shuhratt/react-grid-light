import { HTMLAttributes, ReactNode } from 'react';

export type GridProps<T> = {
  children: ReactNode,
  columns: number,
  className?: string,
} & HTMLAttributes<T>
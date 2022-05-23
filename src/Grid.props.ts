import { HTMLAttributes, ReactNode } from 'react';

export type GridProps<T> = {
  children: ReactNode
  classNames?: string
} & HTMLAttributes<T>
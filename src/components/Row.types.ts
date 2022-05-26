import type { ReactNode } from 'react';

export type RowProps = {
  children: ReactNode;
  className?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
};

import React, { FC } from 'react';
import {GridProps} from './Grid.props';

const Grid:FC<GridProps<HTMLElement>> = (props) => {
  const {columns = 1, children, className} = props

  return (
        <div style={{display: 'grid', gridTemplateColumns: `repeat(1fr, ${columns}`}} className={className}>
          {children}
        </div>
    );
};

export default Grid;
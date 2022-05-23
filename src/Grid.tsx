import React, { FC } from 'react';
import {GridProps} from './Grid.props';

const Grid:FC<GridProps<HTMLElement>> = ({children}) => {
    return (
        <div>
           Start
          {children}
        </div>
    );
};

export default Grid;
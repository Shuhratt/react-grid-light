import React, { FC } from 'react';
import {GridProps} from './Grid.props';

const Grid:FC<GridProps<HTMLElement>> = ({children}) => {
    return (
        <div>
            Grid112232322323
          {children}
        </div>
    );
};

export default Grid;
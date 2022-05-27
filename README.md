# React-Grid-Light

#### install

```
npm i react-grid-light
```

#### example

```js
import React from 'react';
import {Grid, Column, Row} from "react-grid-light"
...
const App = () => {
    ...
    return (
        <Grid
            columns='4'
            rows='auto'
            className='custom__class'
            columnGap='normal'
            rowGap='normal'
        >
        <Column
            gridColumnStart='1'
            gridColumnEnd='2'
            className='custom__class'
        >
          _children_
        </Column>
        <Row
          gridRowStart='1'
          gridRowEnd='2'
          className='custom__class'
        >
          _children_
        <Row/>
     </Grid>
    )
}
...
```

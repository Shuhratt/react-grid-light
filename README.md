# React-Grid-Light

#### install

```
npm i react-grid-light
```

#### use

```js
import React from 'react';
import Grid from "react-grid-light"
...
const App = () => {
    ...
    return (
        <Grid
            columns='1'
            rows='auto'
            className='custom__class'
            columnGap='normal'
            rowGap='normal'
        >
        <Column>
        <Row>
        ...
        children
        ...
       </Grid>
    )
}
...
```

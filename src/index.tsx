import React from 'react';
import { createRoot } from 'react-dom/client';
import Grid from './Grid';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Grid />)
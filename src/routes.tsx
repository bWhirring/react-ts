import * as React from 'react';
import Index from './views/Floor/index';

export const router = [
  {
    path: '/',
    main: () => <Index />,
  },
  {
    path: '/login',
    main: () => <h1>login</h1>,
  },
];

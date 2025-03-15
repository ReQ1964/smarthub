import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Providers from '@/Providers';
import router from './router/router';
import './styles/index.scss';
import './styles/global.css';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <RouterProvider router={router} />
  </Providers>,
);

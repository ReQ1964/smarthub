import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import router from './router/router';
import './styles/index.scss';
import './styles/global.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider>
    <Notifications />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MantineProvider>,
);

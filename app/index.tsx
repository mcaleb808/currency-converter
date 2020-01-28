import React from 'react';
import { Provider } from 'react-redux';
import App from './config/routes';
import store from './config/store';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

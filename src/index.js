import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import todoApp from './reducers';

const store = createStore(todoApp);

render(
  /* 
   * PROVIDER: To “provide” the store to its child components.
   */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
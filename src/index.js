import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

render(
  /* 
   * PROVIDER: To “provide” the store to its child components.
   */
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
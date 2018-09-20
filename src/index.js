import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/configureStore'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

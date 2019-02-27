import React from 'react';
import ReactDOM from'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}> {/* passing the prop 'store' down to Provider; provies access to the store for any component*/}
    <App /> 
  </Provider>,
  document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//components
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {},
  'playing': {},
  'mylist': [],
  'trends': [],
  'originals': [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);




import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import { Provider } from 'react-redux';

import store from './store';

import 'todomvc-app-css/index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));



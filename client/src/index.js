import React from 'react';
import ReactDOM from 'react-dom';

import "normalize.css";
import './assets/styles/main.css';
import App from './containers/App/App';

import { Provider } from 'react-redux';

import { store } from './stores/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);

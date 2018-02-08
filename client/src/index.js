import React from 'react';
import ReactDOM from 'react-dom';

import "normalize.css";
import './assets/styles/main.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();

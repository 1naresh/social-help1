import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './dev/App.js'
import allReducers from './dev/reducers';

const store=createStore(allReducers)

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,document.getElementById('root'));
registerServiceWorker();

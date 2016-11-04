import React from "react";
import ReactDOM from "react-dom";
import store from './store.js';
import { Provider } from 'react-redux';
import App from './app/app.js';

ReactDOM.render(
   <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('app-container'));

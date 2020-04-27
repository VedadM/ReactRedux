import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

import Routes from './Routes';
import rootReducer from './reducers/rootReducer';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

const root = document.getElementById('root');

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
          thunk.withExtraArgument(axiosInstance),
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>,
    root,
);

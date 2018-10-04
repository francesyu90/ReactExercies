import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider>
        <App store={store} />
    </Provider>, document.getElementById('root'));


// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import store from './store'

// Global Styling
import './index.css';

const app = (
    <Provider store={store}>
        <App></App>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import{createLogger} from 'redux-logger';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
import App from './containers/App';


const logger = createLogger();
//create store 
const store = createStore(searchRobots, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

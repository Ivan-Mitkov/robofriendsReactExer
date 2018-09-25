import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
import App from './containers/App';


//create store 
const store = createStore(searchRobots);


ReactDOM.render(
    <Provider store={store}>
        <App  />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';
import Cardlist from './Cardlist';

ReactDOM.render(
<Cardlist robots={robots}/>
, document.getElementById('root'));
registerServiceWorker();

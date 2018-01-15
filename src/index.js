import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import A from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<A />, document.getElementById('root'));
registerServiceWorker();

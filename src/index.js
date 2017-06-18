import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/reducerindex.js";


ReactDOM.render(<Provider store={createStore(reducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

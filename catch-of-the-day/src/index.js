import React from 'react'; // ES6 Modules
import { render } from 'react-dom'; // only need the render() method from ReactDOM

import StorePicker from './components/StorePicker';
import App from './components/App';
import './css/style.css';

render(<App />, document.querySelector('#main'));

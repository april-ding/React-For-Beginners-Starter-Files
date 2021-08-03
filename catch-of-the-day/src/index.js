import React from 'react'; // ES6 Modules
import { render } from 'react-dom'; // only need the render() method from ReactDOM
import Router from './components/Router';

import './css/style.css';

render(<Router />, document.querySelector('#main'));

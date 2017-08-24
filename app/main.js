import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Color from './color';
import './main.css'
render(<Greeter />, document.getElementById('root'));
render(<Color />, document.getElementById('root-one'));


import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import {BLACK} from './actions';
import changeColor from './reducers'
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

let store = createStore(changeColor);

ReactDOM.render(
	<Provider store = { store }>
		<Board knightPosition={[7, 4]}/>
	</Provider>,
	document.getElementById('root'));
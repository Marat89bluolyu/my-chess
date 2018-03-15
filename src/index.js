import React from 'react';
import ReactDOM from 'react-dom';
import Board from './containers/Board';
import chess from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(chess);

ReactDOM.render(
	<Provider store = { store }>
		<Board />
	</Provider>,
	document.getElementById('root')
);

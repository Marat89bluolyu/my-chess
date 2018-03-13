import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import chess from './reducers'
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {observe} from "./Game";

let store = createStore(chess);

ReactDOM.render(
	<Provider store = { store }>
		<Board knightPosition = {store.getState().pos.KNIGHT}/>
	</Provider>,
	document.getElementById('root')
)

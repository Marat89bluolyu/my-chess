/**
 * Created by Marat on 11.03.2018.
 */
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
import {canMoveKnight, moveKnight} from './Game';

class Board extends Component {

	renderSquare(i) {
        const {store} = this.props;
        const [knightX, knightY] = store.KNIGHT;
		const x = i % 8;
		const y = Math.floor(i / 8);

		return (
			<div key={i}
			     style={{  width: '12.5%', height: '60px' }}>
				<BoardSquare handleSquareClick={this.handleSquareClick} x={x} y={y} storeKnight={store} >
					{this.renderPiece(x, y)}
				</BoardSquare>
			</div>
		)
	}

	renderPiece(x,y){
        const {store} = this.props;
        const [knightX, knightY] = store.KNIGHT;
        if (x === knightX && y === knightY) {
            return <Knight />;
        }
	}

	handleSquareClick = (toX, toY) =>{
		const {moveKnight} = this.props;
		const {store} = this.props;
        // if (canMoveKnight(toX, toY, store)) {
            moveKnight(toX, toY);
        // }
	}

	render() {
		const squares = [];
		const {store} = this.props;
		console.log(store.KNIGHT);

		for (let i = 0; i < 64; i++) {
			squares.push( this.renderSquare( i ) );
		}

		return (
			<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexWrap: 'wrap'
			}}>
				{squares}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		store: state.pos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			moveKnight
		},
		dispatch)
}

export default DragDropContext(HTML5Backend)
(connect(mapStateToProps, mapDispatchToProps)
(Board));
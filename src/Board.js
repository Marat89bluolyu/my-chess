/**
 * Created by Marat on 11.03.2018.
 */
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Square from './Square';
import Knight from './Knight';
import * as pageActions from './Game';

class Board extends Component {

	renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		const black = (x + y) % 2 === 1;
		const {store} = this.props;
		const [knightX, knightY] = store.KNIGHT;
		const piece = (x === knightX && y === knightY)?
		<Knight/> :
		null;

		return (
			<div key={i}
			     style={{  width: '12.5%', height: '60px' }}
                 onClick={()=>{this.handleSquareClick(x,y)}}>
				<Square black={black}>
					{piece}
				</Square>
			</div>
		)
	}

	handleSquareClick(toX, toY){
		const { moveKnight } = this.props.moveKnight;

        if (this.canMoveKnight(toX, toY)) {
            moveKnight(toX, toY);
        }
	}

    canMoveKnight(toX, toY) {
        const {store} = this.props;
        const [x, y] = store.KNIGHT;
        const dx = toX - x;
        const dy = toY - y;

        return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2);
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
	return {
		moveKnight: bindActionCreators(pageActions, dispatch)
	}
}

export default DragDropContext(HTML5Backend)
(connect(mapStateToProps, mapDispatchToProps)
(Board));
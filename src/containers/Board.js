//MAIN BOARD PRESENTATIONAL COMPONENT
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Knight from '../components/Knight';
import { moveKnight } from '../actions/index';

class Board extends Component {

    //WE CALCULATE X,Y COORDS, AND SPECIFY FOR EVERY SQUARE
	//X,Y COORDS PASSED IN THE SQUARE FOR DropTarget FUNCTION AND CALCULATE COLOR
	renderSquare(i) {
        const {store} = this.props;
		const x = i % 8;
		const y = Math.floor(i / 8);

		return (
			<div key={i}
			     style={{  width: '12.5%', height: '60px' }}>
				<BoardSquare
					handleSquareClick={this.dropToSquare}
					x={x} y={y}
					storeKnight={store} >
					{this.renderPiece(x, y)}
				</BoardSquare>
			</div>
		)
	}

	//WE ARE COMPARE SQUARE COORDS AND PIECE POSITION, THEN RENDER PIECE
	renderPiece( x,y ){
        const { store } = this.props;
        const [ knightX, knightY ] = store.KNIGHT;
        if ( x === knightX && y === knightY ) {
            return <Knight />;
        }
	};

     //FUNCTION FOR DROP EVENT HANDLER
	 dropToSquare = (toX, toY) =>{
		const { moveKnight } = this.props;
        moveKnight(toX, toY);

	};

	// PUSHING IN ARRAY SQUARES AND DISPLAY THEM
	render() {
		const squares = [];

		for ( let i = 0; i < 64; i++ ) {
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

function mapStateToProps( state ) {
	return {
		store: state.pos
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( { moveKnight }, dispatch )
}

export default DragDropContext(HTML5Backend)
(connect(mapStateToProps, mapDispatchToProps)
(Board));
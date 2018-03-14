import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { compose } from 'redux';
import { connect } from 'react-redux'
import {ItemTypes} from '../constants/index';
import { DropTarget } from 'react-dnd';

import Square from '../components/Square';
import { moveKnight, canMoveKnight } from '../actions/index';

const squareTarget = {
    canDrop(props){
        return canMoveKnight(props.x, props.y, props.storeKnight);
    },

    drop(props, monitor) {
        const {handleSquareClick, x,y} = props;
        handleSquareClick(x, y);
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

class BoardSquare extends Component {
    renderOverlay(color) {
        return (
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }} />
        )
    }

    render() {
        const { x, y, connectDropTarget, isOver, canDrop } = this.props;
        const black = (x + y) % 2 === 1;

        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                <Square black={black}>
                    {this.props.children}
                </Square>
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && canDrop && this.renderOverlay('green')}
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
    return bindActionCreators({ moveKnight }, dispatch)
}

export default compose(
    DropTarget(ItemTypes.KNIGHT, squareTarget, collect),
    connect(mapStateToProps, mapDispatchToProps)
)(BoardSquare)
/**
 * Created by Marat on 10.03.2018.
 */
import React, { Component } from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
	render() {
        const { connectDragSource, isDragging } = this.props;
		return connectDragSource(
            <span style={{
                opacity: isDragging? 0.5 : 1,
                fontSize: '36px',
                fontWeight: 'bold',
                cursor: 'move'
            }}>♘</span>
		)
	}
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
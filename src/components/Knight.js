/**
 * Created by Marat on 10.03.2018.
 */
import React, { Component } from 'react';
import { ItemTypes } from '../constants/index';
import { DragSource } from 'react-dnd';
import {imageLink} from '../constants/index';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
    componentDidMount(){
        const img = new Image();
        img.src = imageLink;
        img.onload = () => this.props.connectDragPreview(img);
    }

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
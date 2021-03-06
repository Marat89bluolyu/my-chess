//THE SINGLE SQUARE PRESENTATIONAL COMPONENT
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
	render() {

		{ /*WHEN COMPONENT GET BOOLEAN FROM PROPS - SQUARE WILL BE FILLED*/ }
		const { black } = this.props;
		const fill = black ? 'black' : 'white';
		const stroke = black ? 'white' : 'black';

		return <div style={{
			background: fill,
			color: stroke,
			width: '100%',
			height: '100%'
		}}>{ this.props.children }</div>
	}
}

Square.propTypes = {
	black: PropTypes.bool
};
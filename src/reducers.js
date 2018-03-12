/**
 * Created by Marat on 10.03.2018.
 */
const changeColor = (
	state={fill:'white', stroke:'black'},
	action) => {
	switch (action.type) {
		case 'BLACK':
			return {fill: 'black', stroke: 'white'}
		default:
			return state;
	}
};

const fillSquares = (state=[], action) => {
	switch (action.type){
		case 'SET_BLACK_COLOR':
			return ;
	}
};

export default changeColor;
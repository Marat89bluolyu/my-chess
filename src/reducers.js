/**
 * Created by Marat on 10.03.2018.
 */

const initialState = {
    pos: {
        'KNIGHT': [7, 4]
    }
}

const chess = (
    state = initialState,
    action) => {
    switch (action.type) {
        case 'MOVE_KNIGHT':
                return {
                    ...state,
                    pos: {
                        'KNIGHT': action.payload
                    }
                }
        default:
            return state;
    }
};

export default chess;
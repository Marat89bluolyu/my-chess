import {MOVE_KNIGHT} from '../constants';

//ACTION CREATOR FUNCTION
export function moveKnight(toX, toY) {

    return {
        type: MOVE_KNIGHT,
        payload: [toX,toY]
    }
}
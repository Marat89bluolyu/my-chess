export function moveKnight(toX, toY) {
    return {
        type: 'MOVE_KNIGHT',
        payload: [toX,toY]
    }
}

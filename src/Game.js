export function moveKnight(toX, toY) {
    console.log(toX,toY)
    return {
        type: 'MOVE_KNIGHT',
        payload: [toX,toY]
    }
}

export function canMoveKnight(toX, toY, store) {
    const [x, y] = store.KNIGHT;
    const dx = toX - x;
    const dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
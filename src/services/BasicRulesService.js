export const isCellAlive = (state, neighbours) => {
    if(isReproductive(neighbours)) return true;
    if(isOverPopulated(neighbours) || isUnderPopulated(neighbours)) return false;
    return state;
};

export const isUnderPopulated = (neighbours) => {
    return neighbours < 2;
};

export const isOverPopulated = (neighbours) => {
    return neighbours > 3;
};

export const isReproductive = (neighbours) => {
    return neighbours === 3;
};


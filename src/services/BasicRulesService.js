export const isUnderPopulated = neighbours => neighbours < 2;

export const isOverPopulated = neighbours => neighbours > 3;

export const isReproductive = neighbours => neighbours === 3;

export const isCellAlive = (state, neighbours) => {
  if (isReproductive(neighbours)) return true;
  if (isOverPopulated(neighbours) || isUnderPopulated(neighbours)) return false;
  return state;
};


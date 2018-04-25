const underPopulation = (neighbours) => {
    return neighbours < 2;
};

const overPopulation = (neighbours) => {
    return neighbours > 3;
};

const reproductive = (neighbours) => {
    return neighbours === 3;
};

export default { underPopulation, overPopulation, reproductive }
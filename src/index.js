module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    let sortMatrix = matrix;
    let result = [];
    for (let i = 0; i < sortMatrix.length; i++) {
        if (i % 2 !== 0) sortMatrix[i].reverse();
    }
    sortMatrix.forEach((arr) => (result = result.concat(arr)));
    return result;
};

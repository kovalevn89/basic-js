const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return matrix.flat(100).reduce(function(result, value) {
    return value === '^^' ? result + 1 : result ;
  }, 0);
}

module.exports = {
  countCats
};

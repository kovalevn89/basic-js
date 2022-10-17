const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let b = arr.slice(0);
  let a = arr.sort(function (a,b){
    return b-a;
}).filter( function(value){return value==-1 ? false : true} )

return b.map(function(value) {return value == -1? -1 : a.pop()});
}

module.exports = {
  sortByHeight
};

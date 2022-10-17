const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let max = 0;
  let data = String(n).split('');
  
  for(let i = 0; i < data.length; i++){

    let temp = [];

    for(let j = 0; j < data.length; j++){
      if(i!=j)
        temp.push(data[j]);
    }

    max = Math.max(max,temp.join(''));
  }

  return max;
}

module.exports = {
  deleteDigit
};

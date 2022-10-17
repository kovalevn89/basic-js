const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let data1 = s1.split('');
  let data2 = s2.split('');

  let charBase = [];

  for(let i = 0; i < data1.length; i++){
    if(data2.indexOf(data1[i]) != -1){
      data2.splice(data2.indexOf(data1[i]), 1);
      charBase.push(data1[i]);
    }
  }

  return charBase.length;
}

module.exports = {
  getCommonCharacterCount
};

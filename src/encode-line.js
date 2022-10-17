const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let data = [];
  let index = 0;
  
  for(let i = 0; i < str.length; i++){
    if( i == str.length - 1){}
    
    if(str[i] != str[i+1]){
      data.push(str.slice(index, i  + 1)); 
      index = i + 1;
    }
  }
  
  return data.map(function(index){
    return index.length == 1 ? index.split('')[0] : index.length + index.split('')[0]
  }).join('');
}

module.exports = {
  encodeLine
};

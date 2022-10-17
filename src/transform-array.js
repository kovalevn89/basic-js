const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {

  try{
      let _arr = arr.slice(0);
      
      let result = [];
      for(let i = 0; i< _arr.length; i++){
        switch(_arr[i]){
          case '--discard-next': {i=i + 1; if(i!=_arr.length-1) _arr[i + 1] = 'dis'; } break;
          case '--discard-prev': {result.pop();} break;
          case '--double-next': {if(i!=_arr.length-1) result.push(_arr[i+1]);} break;
          case '--double-prev': {if(i!=0) result.push(_arr[i-1]);} break;
          default: {if(_arr[i]!='dis') result.push(_arr[i]);} break;
        }
      }

      return result;
  }catch{
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
	do{
    names = names.map(function(value, index, array){
    if( array.indexOf(value)==index) {
      return value; 
    }else{
      let n = 1;
      
      while(array.indexOf(`${value}(${n})`)<index){
        if(array.indexOf(`${value}(${n})`)==-1){
          return `${value}(${n})`; 
        }
        
        n=n+1;
      }
        return `${value}(${n})`;
    }
  });
  }while(	new Set(names).size !== names.length);
  
 
  
  return names;
}

module.exports = {
  renameFiles
};

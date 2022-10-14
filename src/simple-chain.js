const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

var chain =[];
const chainMaker = {
  
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return chain.length;
  },
  addLink( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    chain.push(value);
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    chain.splice(position, 1);
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    chain.reverse();
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return '( ' + chain.join(' )~~( ') + ' )';
  }
};

module.exports = {
  chainMaker
};

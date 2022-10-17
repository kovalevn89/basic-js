const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    if (typeof value === 'undefined')
      this._chain.push('');
    else
      this._chain.push(String(value));

    return this;
  },

  removeLink(position) {
    if( position > this._chain.length || position < 1 || typeof position != 'number') {
      this._chain = [];
      throw new Error("You can't remove incorrect link!")
    }

    this._chain.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this._chain.reverse();

    return this;
  },

  finishChain() {
    let _arr = this._chain.slice(0);
    this._chain = [];

    let test = '( ' + _arr.join(' )~~( ') + ' )';
    //console.debug(test);
    return test;
  }
};

module.exports = {
  chainMaker
};

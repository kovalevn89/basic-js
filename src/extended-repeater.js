const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (Object.hasOwn(options, 'additionRepeatTimes')) {
    if (Object.hasOwn(options, 'addition')) {
      let temp = new Array(options.additionRepeatTimes);
      temp.fill(String(options.addition), 0, options.additionRepeatTimes);

      if (Object.hasOwn(options, 'additionSeparator')) {
        str = str + temp.join(options.additionSeparator);
      } else {
        str = str + temp.join('|');
      }
    }
  }
  else {
    if (Object.hasOwn(options, 'addition')) {
      let temp = new Array(options.additionRepeatTimes);
      temp.fill(options.addition, 0, options.additionRepeatTimes);

      if (Object.hasOwn(options, 'additionSeparator')) {
        str = str + temp.join(options.additionSeparator);
      } else {
        str = str + temp.join('|');
      }
    }
  }

  let result = str.repeat(options.repeatTimes);

  if (Object.hasOwn(options, 'repeatTimes')) {

    let temp = new Array(options.repeatTimes);
    temp.fill(str, 0, options.repeatTimes);

    if (Object.hasOwn(options, 'separator')) {
      result = temp.join(options.separator);
    } else {
      result = temp.join('+');
    }
  }
  else {
    let temp = new Array(1);
    temp.fill(str, 0, 1);

    if (Object.hasOwn(options, 'separator')) {
      result = temp.join(options.separator);
    } else {
      result = temp.join('+');
    }
  }

  return result;
}

module.exports = {
  repeater
};

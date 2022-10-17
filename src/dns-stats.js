const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
	  let result = {}; 
    let test = domains.map(function(value){
    let data = value.split('.').reverse();

    data.reduce(function(acc,value,index) {

			acc= acc + '.' +value;

    	result[acc]? result[acc]+=1 : result[acc]=1;
      
      return acc
    },'')
  });

  return result;
}

module.exports = {
  getDNSStats
};

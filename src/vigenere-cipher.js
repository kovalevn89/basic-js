const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(reverce) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.table = [];
    this.rev = false;

    if (reverce === false)
      this.rev = true;
  }

  generateFullKey(firstString, secondString) {
    let result = "";
    let firstStringLength = firstString.length;
    let index = 0;
    for (let i = 0; i < secondString.length; i++) {
      if (i % firstStringLength === 0) {
        index = 0;
      }
      result += firstString[index];
      index++;
    }
    return result;
  }

  square() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.table.push(row.split(''));
    }
  }


  encrypt(message, key) {
    if (!message || !key) {
      throw new NotImplementedError('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptMessage = "";

    let newKey = this.generateFullKey(key, message);

    this.square();

    let keyIndex = 0;
    for (let it = 0; it < message.length; it++) {

      if (this.alphabet.split('').indexOf(message[it]) === -1) {
        encryptMessage += message[it];
      } else {
        let i = this.alphabet.indexOf(message[it]);

        let j = this.alphabet.indexOf(newKey[keyIndex]);

        encryptMessage += this.table[i][j];
        keyIndex++;
      }

    }

    if (this.rev)
      return encryptMessage.split('').reverse().join('');
    else
      return encryptMessage;
  }

  decrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptMessage = "";
    let newKey = this.generateFullKey(key, message);
    this.square();

    let keyIndex = 0;
    for (let it = 0; it < message.length; it++) {
      if (this.alphabet.split('').indexOf(message[it]) === -1) {
        decryptMessage += message[it];
      } else {
        let i = this.alphabet.indexOf(newKey[keyIndex]);

        let j = this.table[i].indexOf(message[it]);
        decryptMessage += this.alphabet[j];
        keyIndex++;
      }
    }

    if (this.rev)
      return decryptMessage.split('').reverse().join('');
    else
      return decryptMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};

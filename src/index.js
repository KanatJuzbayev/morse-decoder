const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var str = expr.split('').join('');

  if (str.length < 1) {
    return false;
  }

  var dot = '.';
  var dash = '-';
  var space = ' ';
  var decodeSym = '';
  var decodeStr = '';

  for (var i = 0; i < str.length; i += 10) {
    if ((str.substring(i, i + 10)) == '**********') {
      decodeSym = decodeSym + space;
    } else {
      var symbol = str.substring(i, i + 10);
      var symStr = '';
      for (var j = 0; j < 10; j += 2) {
        if (symbol.substring(j, j + 2) == '10') {
          symStr = symStr + dot;
        } else if (symbol.substring(j, j + 2) == '11') {
          symStr = symStr + dash;
        }
      }

      decodeSym = decodeSym + MORSE_TABLE[symStr];
    }

  }

  return decodeSym;
}

module.exports = {
    decode
}

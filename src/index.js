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
    let bitsArray = [];
    for (let i = 0; i < expr.length; i+=10) {
        bitsArray.push(expr.slice(i, i+10))
    }
    let changedBits = bitsArray.map((bits) => bits.slice(bits.search("1")));

    let morseCode = [];

    for (let i = 0; i < changedBits.length; i++) {
        let morseArray = [];
        for (let j = 0; j < changedBits[i].length; j+=2){
            let pair = "";
            pair = changedBits[i].slice(j, j+2);
            switch(pair){
                case '10':
                    morseArray.push('.');
                    break;
                case '11':
                    morseArray.push('-')
                    break;
                case '*':
                    morseArray.push(' ')
                    break;
            }
        }
        morseCode.push(morseArray.join(""));
    }

    let convertedString = morseCode.map(function (morseSymbol) {
        for (let key in MORSE_TABLE){
            if(key === morseSymbol){
                return MORSE_TABLE[key];
            }
        }
        return " ";
    }).join("");

    return convertedString
}



module.exports = {
    decode
}
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
    // expr -> 10 symbols => each symbol (10 digits) => 0000111110 -> --.
    var list = '';
    var dotHip = '';
    for (var encodedLetter of expr.match(/.{1,10}/g)){

        if (encodedLetter == '**********'){
            list += ' '
            continue
        }
        for(var letter of encodedLetter.match(/.{1,2}/g)){
            if(letter == '10')
                dotHip += ".";
            else if(letter == '11')
                dotHip += '-';
            else 
                continue;
        }
        list += MORSE_TABLE[dotHip];
        dotHip = '';
    }
    return list;
}

module.exports = {
    decode
}
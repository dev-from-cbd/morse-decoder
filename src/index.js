const MORSE_TABLE = {
  "**********": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function morseToText(expr) {
  let morse = "";
  let result = "";
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === "0") {
      if (morse.length === 10) {
        result += MORSE_TABLE[morse];
        morse = "";
      }
      if (i % 10 === 9) {
        result += " ";
      }
    } else {
      morse += expr[i];
    }
  }
  result += MORSE_TABLE[morse];
  return result;
}

module.exports = {
  morseToText,
};

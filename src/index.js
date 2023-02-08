const MORSE_TABLE = {
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

function decode(expr) {
  const binaryLetters = lettersBinary(expr);
  const morseArr = binaryToMorse(binaryLetters);
  return morseToWord(morseArr);
}

module.exports = {
  decode,
};

function lettersBinary(expr) {
  const letterCount = 10;
  let count = 0;
  const letters = [];
  while (count < expr.length) {
    const letter = expr.substr(count, letterCount);
    letters.push(letter);
    count += letterCount;
  }
  return letters;
}

function binaryToMorse(binaryArray) {
  return binaryArray.map((binary) =>
    binary.replace(/10/g, ".").replace(/11/g, "-").replace(/00/g, "")
  );
}

function morseToWord(morseArray) {
  return morseArray.reduce((sentence, morse) => {
    if (morse === "**********") {
      return sentence + " ";
    } else {
      return sentence + MORSE_TABLE[morse];
    }
  }, "");
}

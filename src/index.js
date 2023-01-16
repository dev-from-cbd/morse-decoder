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
  const results = "";
  const character = "";

  for (let i = 0; i < expr.length; i += 10) {
    character = "";

    if (expr[i] === "*") character = " ";
    else
      for (let j = 0; j < 10; j += 2)
        if (expr[i + j] === 1) character += expr[i + j + 1] === 1 ? "-" : ".";

    results += MORSE_TABLE[character] ?? character;
  }
  return results;
}

module.exports = {
  decode,
};

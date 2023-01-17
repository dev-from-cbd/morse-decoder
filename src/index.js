const morseCodeMap = {
  " ": " ",
  ".": "a",
  "-": "b",
  "..": "c",
  "...": "d",
  ".": "e",
  "..-": "f",
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

const morseToText = (morseCode) => {
  const decodedLetters = [];

  for (let i = 0; i < morseCode.length; i += 10) {
    decodedLetters.push(morseCode.slice(i, i + 10));
  }

  return decodedLetters.reduce((decodedText, morseWord) => {
    const morseCode = morseWord
      .split("")
      .map((c) => (c === "1" ? "." : "-"))
      .join("");
    return (decodedText += morseCodeMap[morseCode]);
  }, "");
};

module.exports = {
  morseToText,
};

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
  const binArrWords = expr.split("**********");
  let wordsArr = [];
  binArrWords.forEach((word) => {
    let curWord = "";
    for (let i = 0; i < word.length; i += 10) {
      let morseLetter = word
        .slice(i, i + 10)
        .replace(/1/g, "-")
        .replace(/0/g, ".");
      curWord += MORSE_TABLE[morseLetter] || " ";
    }
    wordsArr.push(curWord);
  });
  return wordsArr.join(" ");
}

module.exports = {
  decode,
};

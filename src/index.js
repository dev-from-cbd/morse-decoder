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
  let decodeWordsArr = [];
  let finaleDecodeArr = [];
  let groups = expr.match(/.{1,10}/g);
  groups.forEach((group) => {
    let morseWord = group.replace(/10/g, ".").replace(/11/g, "-");
    let letter = MORSE_TABLE[morseWord] || " ";
    finaleDecodeArr.push(letter);
  });
  return finaleDecodeArr.join("");
}
module.exports = {
  decode,
};

const morseCode = {
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

function decodeMorse(encodedMessage) {
  const groups = encodedMessage.match(/.{1,10}/g);
  const decoded = groups.map((group) => {
    return group.replace(/^0+|10|11/g, (match) => {
      if (match === "10") {
        return ".";
      } else if (match === "11") {
        return "-";
      }
      return "";
    });
  });
  const decodedMessage = decoded
    .map((code) => {
      return morseCode[code] || " ";
    })
    .join("");
  return decodedMessage;
}

module.exports = {
  decodeMorse,
};

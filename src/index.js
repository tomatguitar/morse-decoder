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

function decode(expression) {
  let decodedResult = [];

  for (let i = 0; i < expression.length; i += 10) {
    let letter = "";
    let binaryChar = "";
    let decoded = "";
    binaryChar = expression.slice(i, i + 10);

    if (binaryChar === "**********") {
      decodedResult.push(" ");
      continue;
    }

    for (let j = 0; j < 10; j += 2) {
      decoded = binaryChar.slice(j, j + 2);

      if (decoded === "10") {
        letter += ".";
      }

      if (decoded === "11") {
        letter += "-";
      }
    }
    decodedResult.push(MORSE_TABLE[letter]);
  }

  return decodedResult.join("");
}

module.exports = {
  decode
};

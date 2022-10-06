function caesarCipher(text, offset) {
  if (text.trim() == "" || offset < 0 || offset > 25 || offset == 0) {
    return "Error";
  } else {
    let newText = "";
    text.split("").forEach((letter) => {
      if (getLetter(letter) == -1) {
        newText += letter;
      } else {
        let index = (getLetter(letter) + offset) % 26;
        newText += getNewLetter(index);
      }
    });
    return newText;
  }
}
function getNewLetter(index) {
  let letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(
    " "
  );
  return letters[index];
}
function getLetter(letter) {
  switch (letter) {
    case "a":
      return 0;
      break;
    case "b":
      return 1;
      break;
    case "c":
      return 2;
      break;
    case "d":
      return 3;
      break;
    case "e":
      return 4;
      break;
    case "f":
      return 5;
      break;
    case "g":
      return 6;
      break;
    case "h":
      return 7;
      break;
    case "i":
      return 8;
      break;
    case "j":
      return 9;
      break;
    case "k":
      return 10;
      break;
    case "l":
      return 11;
      break;
    case "m":
      return 12;
      break;
    case "n":
      return 13;
      break;
    case "o":
      return 14;
      break;
    case "p":
      return 15;
      break;
    case "q":
      return 16;
      break;
    case "r":
      return 17;
      break;
    case "s":
      return 18;
      break;
    case "t":
      return 19;
      break;
    case "u":
      return 20;
      break;
    case "v":
      return 21;
      break;
    case "w":
      return 22;
      break;
    case "x":
      return 23;
      break;
    case "y":
      return 24;
      break;
    case "z":
      return 25;
      break;
    default:
      return -1;
      break;
  }
}

module.exports = caesarCipher;

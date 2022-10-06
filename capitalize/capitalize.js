function capitalize(str) {
  if (typeof str == "string" && str != "" && str.trim() != "") {
    let strSplit = str.replaceAll(/ +/g, " ").trim().split(" ");
    let newStr = "";
    strSplit.forEach((word) => {
      newStr += word[0].toUpperCase() + word.slice(1, word.length) + " ";
    });
    return newStr.trim();
  } else {
    return "Error";
  }
}

module.exports = capitalize;

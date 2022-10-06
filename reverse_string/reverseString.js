function reverseString(str) {
  if (typeof str == "string" && str.trim() != "") {
    return str.split("").reverse("").join("");
  } else {
    return "Error";
  }
}

module.exports = reverseString;

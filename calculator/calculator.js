function add(a, b) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    b == undefined ||
    a == undefined
  )
    return "Error";
  return a + b;
}

function subtract(a, b) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    b == undefined ||
    a == undefined
  )
    return "Error";
  return a - b;
}

function divide(a, b) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    b == undefined ||
    a == undefined ||
    b == 0
  )
    return "Error";
  return a / b;
}

function multiply(a, b) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    b == undefined ||
    a == undefined
  )
    return "Error";
  return a * b;
}

module.exports = { add, subtract, divide, multiply };

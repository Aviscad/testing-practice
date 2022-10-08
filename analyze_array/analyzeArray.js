function analizeArray(arr) {
  if (arr.length > 0) {
    let average,
      min = arr[0],
      max = [0],
      length = arr.length;

    average =
      arr.reduce((sum, current) => {
        return sum + current;
      }, 0) / arr.length;
    if (isNaN(average)) return "Error";
    min = Math.min(...arr);
    max = Math.max(...arr);

    return { average, min, max, length };
  } else {
    return "Error";
  }
}

module.exports = analizeArray;

const sumAll = function (a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    a < 0 ||
    b < 0 ||
    a % 1 !== 0 ||
    b % 1 !== 0
  ) {
    return "ERROR";
  }

  const smallest = Math.min(a, b);
  const largest = Math.max(a, b);
  let sum = 0;
  for (let i = smallest; i <= largest; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

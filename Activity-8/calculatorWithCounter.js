function createCalculator(initialValue = 0) {
  let value = initialValue; // private variable
  let operationCount = 0;   // counter for operations

  return {
    add: function (num) {
      value += num;
      operationCount++;
      return value;
    },
    subtract: function (num) {
      value -= num;
      operationCount++;
      return value;
    },
    multiply: function (num) {
      value *= num;
      operationCount++;
      return value;
    },
    divide: function (num) {
      if (num === 0) {
        throw new Error("Cannot divide by zero");
      }
      value /= num;
      operationCount++;
      return value;
    },
    reset: function () {
      value = 0;
      operationCount = 0;
      return value;
    },
    getValue: function () {
      return value;
    },
    getOperationCount: function () {
      return operationCount;
    }
  };
}

// Example usage:
const calc = createCalculator(10);
console.log(calc.add(5));            // 15
console.log(calc.multiply(2));       // 30
console.log(calc.subtract(10));      // 20
console.log(calc.getOperationCount()); // 3
console.log(calc.reset());           // 0

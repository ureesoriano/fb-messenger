const sum = (a, b) => a + b

const substract = (a, b) => a - b

let result, expected

// Task: test this using the toEqual function below
result = expect(sum(2,1)).toEqual(3);

// Task: test this using the toBe function below
result = expect(substract(2,1)).toBe(1);

console.log('GREAT SUCCESS!');

function expect(actual) {
  function toEqual(expected) {
    if (actual != expected) {
      throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
    }
  }

  function toBe(expected) {
    if (actual !== expected) {
      throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
    }
  }

  return {
    toEqual,
    toBe,
  }
}


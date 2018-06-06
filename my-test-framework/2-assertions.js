/*
Assertions are functions that help us assert the test is correct
Tasks:

1. Implement the toEqual and toBe assetion functions
2. Use your assertion functions to assert sum(2,1) and substract(2,1) work as expected
*/

function toEqual(actual, expected) {
  return actual == expected;
}

function toBe(actual, expected) {
  return actual === expected;
}

const sum = (a, b) => a + b

const substract = (a, b) => a - b

if (! toBe(sum(1, 2), 3)) {
  throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
} else {
  console.log('OK');
}

if (! toEqual(substract(2, 1), 1)) {
  throw new Error(`Actual value was ${actual}, but ${expected} was expected`)
} else {
  console.log('OK');
}

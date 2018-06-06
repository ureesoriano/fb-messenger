const sum = (a, b) => a + b

const substract = (a, b) => a - b

let testCount = 0;

function test(message, callback) {
  try {
    callback();
  }
  catch (e) {
    console.log(`${++testCount}. ERROR - ${message}`);
    console.log(`    \`--> ${e.message}`);
    return;
  }
  console.log(`${++testCount}. OK - ${message}`);
}

test('sum 2 and 1 should be 3', () => {
  actual = sum(2,1)
  expect(actual).toBe(4)
})

test('substract 2 and 1 should be 1', () => {
  actual = substract(2,1)
  expect(actual).toBe(1)
})

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

const sum = (a, b) => a + b

const substract = (a, b) => a - b

// Let's write some tests for those functions
const testSum = () => {
  const result = sum(1, 2);
  const expected = 3;

  if (result !== expected) {
    throw new Error('KO - sum');
  }
  console.log('OK!');
}

const testSubstract = () => {
  const result = substract(3, 2);
  const expected = 1;

  if (result !== expected) {
    throw new Error('KO - subtract');
  }
  console.log('OK!');
}

testSum();
testSubstract();

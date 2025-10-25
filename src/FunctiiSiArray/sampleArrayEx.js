const sampleArray = [1, 2, 3, 4, 5];

const reduce = (array, reducer, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i], i, array);
  }

  return accumulator;
};

const suma = reduce(sampleArray, (acc, x) => acc + x, 0);
const produs = reduce(sampleArray, (acc, x) => acc * x, 1);

console.log("Suma elementelor:", suma);
console.log("Produsul elementelor:", produs);

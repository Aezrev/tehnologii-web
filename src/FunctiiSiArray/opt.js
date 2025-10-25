function average(array) {
  if (array.length === 0) return 0; 
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}

const numbers = [10, 20, 30, 40, 50];
console.log("Average:", average(numbers));
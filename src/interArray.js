const intercalateArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return []; 

  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]); 
  }

  return result;
};

console.log(intercalateArrays([1, 2, 3], ['a', 'b', 'c'])); 


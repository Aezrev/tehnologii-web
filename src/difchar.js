const diffChars = (str1, str2) => {
  if (str1.length !== str2.length) {
    return -1; //lungime dif
  }
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++; 
  }

  return count;
};

console.log(diffChars("test", "text"));  
console.log(diffChars("abcd", "abdc"));  
console.log(diffChars("abc", "abcd")); 

function sortByKey(array, key) {
  return array.slice().sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 30 }
];

console.log("Sorted by name:");
console.log(sortByKey(people, "name"));

console.log("Sorted by age:");
console.log(sortByKey(people, "age"));

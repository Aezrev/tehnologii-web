function sumaDivizibile(array, divizor) {
  return array
    .filter(num => num % divizor === 0) 
    .reduce((suma, num) => suma + num, 0); 
}

const numere = [10, 15, 20, 25, 30, 33, 40];
const divizor = 5;

console.log(`Suma numerelor divizibile cu ${divizor} este:`, sumaDivizibile(numere, divizor));

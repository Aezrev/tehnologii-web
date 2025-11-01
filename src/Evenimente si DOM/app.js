import { TAX_RATE, calcPriceWithTax } from './utils.js';

console.log("Cota TVA:", TAX_RATE);
console.log("Pret final pentru 100 lei:", calcPriceWithTax(100));

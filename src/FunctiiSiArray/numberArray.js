const aniNastere = [2000, 2010, 1995, 1988, 2008, 1975];
const anulCurent = new Date().getFullYear();

const varste = aniNastere.map(an => anulCurent - an);

const varstePeste18 = varste.filter(v => v > 18);

console.log("Ani de nastere:", aniNastere);
console.log("Varste:", varste);
console.log("Varste peste 18 ani:", varstePeste18);

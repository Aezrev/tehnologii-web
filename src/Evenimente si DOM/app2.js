const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'file.txt');

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Director creat:', dirPath);
}

fs.writeFileSync(filePath, 'Salut! Acesta este un fisier de test.');
console.log('Fisier creat:', filePath);

setTimeout(() => {
    rimraf(dirPath, (err) => {
        if (err) {
            console.error('Eroare la stergerea directorului:', err);
        } else {
            console.log('Director sters:', dirPath);
        }
    });
}, 2000);

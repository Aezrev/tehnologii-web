const fs = require('fs')
function rleCompress(input) {
    let output = ''
    let count = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++
        } else {
            output += input[i] + count
            count = 1
        }
    }
    return output
}
function compressFile(inputFile, outputFile) {
    try {
        const data = fs.readFileSync(inputFile, 'utf-8')
        const compressed = rleCompress(data)
        fs.writeFileSync(outputFile, compressed)
        console.log(`Fisierul ${inputFile} a fost comprimat cu succes → ${outputFile}`)
    } catch (err) {
        console.error('Eroare:', err.message)
    }
}
compressFile('input.txt', 'output.txt')

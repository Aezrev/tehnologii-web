function freqRel(text){
    const noSpace = text.replace(/\s+/g, '').toLowerCase();

    const frecvente = {};
    let total = 0;
    for(let c of noSpace){
        if (/[a-z]/.test(c)) {
            frecvente[c] = (frecvente[c] || 0) +1;
            total++;
        }
    }
    for(let litera in frecvente){
        frecvente[litera] = frecvente[litera]/total;

    }
    return frecvente;
}

const text = "Buna ce faci";
    const rezultat = freqRel(text);
    console.log("Frecvente rel:");
        for (let [lit, freq] of Object.entries(rezultat)) {
    console.log(`${lit}: ${freq.toFixed(3)}`);
        }
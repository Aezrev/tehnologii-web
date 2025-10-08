const fibonacci = (n) => {
    if(n < 0) return null;
    if(n === 0) return 0;
    if(n === 1) return 1;

    let a =0, b=1;
    for(let i =2; i <=n; i++){
        [a,b] = [b, a+b];
    }
    return b;
};
const n = parseInt(process.argv[2]);
console.log(`Termenul fibonacci de ordinul ${n} este : ${fibonacci(n)}`)

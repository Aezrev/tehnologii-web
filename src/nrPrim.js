const checkPrime = (n) => {
    for(let i =2; i<= Math.sqrt(n); i++){
        if (!(n%i)){
            return false;
        }
    }
    return true;
}


if(process.argv.length < 3){
    console.log("Not enough parameters");

} else {
    console.log(checkPrime(process.argv[2]));
}

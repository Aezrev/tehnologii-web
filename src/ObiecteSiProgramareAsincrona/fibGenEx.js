function powGen() {
    const cache = {}

    const pow = (base, exp) => {
        const key = `${base}_${exp}`

        if (key in cache) {
            console.log(`found ${base}^${exp}`)
            return cache[key]
        }

        console.log(`calculated ${base}^${exp}`)

        if (exp === 0) {
            cache[key] = 1
        } else if (exp === 1) {
            cache[key] = base
        } else {
            cache[key] = base * pow(base, exp - 1)
        }

        return cache[key]
    }

    return pow
}

const pow = powGen()
console.log(pow(2, 3))  
console.log(pow(2, 5))  
console.log(pow(2, 3))  

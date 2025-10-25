function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error('First parameter must be an array')
    }
    if (typeof percent !== 'number') {
        throw new Error('Second parameter must be a number')
    }

    return salaries.map(sal => sal + sal * (percent / 100))
}

try {
    const newSalaries = increaseSalary([3000, 4000, 5000], 10)
    console.log('Salarii marite:', newSalaries)

    increaseSalary('not an array', 10)
} catch (err) {
    console.log('Eroare:', err.message)
}

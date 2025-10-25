function deepCloneJSON(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const original = {
    name: 'Andrei',
    skills: ['JS', 'C#', 'SQL'],
    details: { age: 21, city: 'Bucuresti' }
}

const copy = deepCloneJSON(original)
copy.details.city = 'Cluj'

console.log('Original:', original)
console.log('Copy:', copy)

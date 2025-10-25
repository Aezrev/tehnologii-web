class EvenNumberStream {
  #currentValue;

  constructor(startValue = 0) {
    this.#currentValue = startValue % 2 === 0 ? startValue : startValue + 1;
  }

  get next() {
    const result = this.#currentValue;
    this.#currentValue += 2; 
    return result;
  }
}

// Example usage:
const evenStream = new EvenNumberStream(10); 

for (let i = 0; i < 10; i++) {
  console.log(`even[${i}] = ${evenStream.next}`);
}

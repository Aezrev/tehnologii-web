function censorText(text, dictionary) {
  let result = text;

  for (const word of dictionary) {
    const regex = new RegExp(`\\b${word}\\b`, "gi"); 
    result = result.replace(regex, (match) => {
      if (match.length <= 2) return match; 
      return match[0] + "*".repeat(match.length - 2) + match[match.length - 1];
    });
  }

  return result;
}

const text = "javascript is amazing";
const dictionary = ["is"];

console.log(censorText(text, dictionary));

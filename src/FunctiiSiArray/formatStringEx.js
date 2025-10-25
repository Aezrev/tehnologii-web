function formatString(template, params) {
  return template.replace(/{(\w+)}/g, (_, key) => params[key] || `{${key}}`);
}

const text = "un {substantiv} este {adjectiv}";
const valori = { substantiv: "căluț", adjectiv: "drăguț" };

console.log(formatString(text, valori));

function processString(str) {
  let cleaned = str.trim().toUpperCase();

  return cleaned.includes("JS");
}

let text = "   I love js programming   ";
console.log(processString(text));
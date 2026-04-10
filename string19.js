function processNames(names) {
  return names
    .map(name => name.toUpperCase())
    .join(", ");
}

let students = ["Anu", "Rahul", "Meera", "Kiran"];
console.log(processNames(students));
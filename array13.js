function getAdultUsers(users) {
  return users
    .filter(user => user.age > 18)
    .map(user => user.name);
}

let users = [
  { name: "Anu", age: 16 },
  { name: "Rahul", age: 22 },
  { name: "Meera", age: 19 },
  { name: "Kiran", age: 17 }
];

console.log(getAdultUsers(users));
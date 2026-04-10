function getTopStudents(students) {
  return students
    .filter(student => student.marks > 60)
    .map(student => student.name.toUpperCase());
}

let students = [
  { name: "Anu", marks: 45 },
  { name: "Rahul", marks: 75 },
  { name: "Meera", marks: 88 },
  { name: "Kiran", marks: 55 }
];

console.log(getTopStudents(students));
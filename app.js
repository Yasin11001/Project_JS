const students = [
  { name: "Yasin", age: 29, department: "CSE" },
  { name: "Rahim", age: 25, department: "EEE" },
  { name: "Karim", age: 27, department: "CSE" },
  { name: "Hasan", age: 24, department: "BBA" }
];

// Find all CSE students
const cseStudents = students.filter(function(student) {
  return student.department === "CSE";
});

console.log(cseStudents);

console.log("CSE Students:");

cseStudents.forEach(function(student) {
  console.log(student.name, student.age);
});

const totalAge = cseStudents.reduce(function(sum, student) {
  return sum + student.age;
}, 0);

const averageAge = totalAge / cseStudents.length;

console.log("Average Age:", averageAge);
const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function moreThan50(student) {
  return student.score > 50;
}

function increasePercent(point) {
  return (point.score += point.score * 0.1);
}

let totalScore = students
  .filter(moreThan50)
  .map(increasePercent)
  .reduce((acc, cur) => acc + cur, 0);
console.log(`Total score is ${totalScore}`);

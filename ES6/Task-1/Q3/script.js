alert("Please Read Q3 from pdf File and check the Answers in the Console");
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

var check = fruits.every(function (val) {
  return typeof val === "string";
});
console.log(check);

var start = fruits.some(function (val) {
  return val[0] === "a";
});
console.log(start);

var bsFruits = fruits.filter(function (val) {
  return val[0] === "b" || val[0] === "s";
});
console.log(bsFruits);

var newArray = fruits.map(function (val) {
  return `i like ${val}`;
});
console.log(newArray);

fruits.forEach(function (val) {
  console.log(val);
});

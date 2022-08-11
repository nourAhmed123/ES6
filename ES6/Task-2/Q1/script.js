var fibLength = prompt(
  "Enter the number of elements you want to display from the series"
);

var maxNo = prompt("Enter the max no");
var current;
var a;
var b;
function* fibonacci() {
  a = 0;
  b = 1;
  while (b < maxNo) {
    current = a;
    a = b;
    b = current + a;
    yield current;
  }
}

function* MaxFibonacci() {
  a = 0;
  b = 1;
  while (true) {
    current = a;
    a = b;
    b = current + a;
    yield current;
  }
}

var fib = MaxFibonacci();

for (let i = 0; i < fibLength; i++) {
  console.log(i + " -> " + fib.next().value);
}
console.log("_________________________________________________________-");

for (i of fibonacci()) {
  console.log(i);
}

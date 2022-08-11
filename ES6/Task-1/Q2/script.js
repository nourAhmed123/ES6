alert(
  "    Using rest parameter and spread operator return max value from any array note: array length is not fixed Bonus: return min and max value and display each of them separately after function call"
);

function MinMax() {
  var arr = [];
  arr = [1, 2, 3, 4, 5, 8, 7];
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  alert("The Max No. is " + max + "and the Min is  " + min);
  console.log(max);
  console.log(min);
}
MinMax();

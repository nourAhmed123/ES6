// function checkNum() {
//   if (arguments.length < 2) throw "Few Arguments";
//   else if (arguments.length > 2) throw "Too Many Arguments";
//   else return "Accepted";

// }
// console.log(checkNum(1));
// console.log(checkNum(1, 2, 3, 4));
// console.log(checkNum(1, 2));
var x, y;
function checknum() {
  var pro = new Promise((resolve, reject) => {
    if (arguments.length < 2) {
      reject("Few Arguments");
    } else if (arguments.length > 2) {
      reject("Too Many Arguments ");
    } else {
      resolve("Accepted");
    }
  })
    // .then(console.log())
    .then(function (info) {
      //resolve
      console.log(info);
    })
    .catch((err) => console.error(err)); //reject
}
console.log(checknum(1));
console.log(checknum(1, 2, 3, 4));
console.log(checknum(1, 2));

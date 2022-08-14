var obj = {
  name: "Nour",
  age: 20,
  skills: ["JavaScript ", "Html", "Es6"],
};

var i = -1;
obj[Symbol.iterator] = function () {
  return {
    next() {
      i++;
      let x = 0;
      for (let n in obj) {
        if (i === x) {
          return {
            key: n,
            value: obj[n],
            done: false,
          };
        }
        x++;
      }
      return {
        key: undefined,
        value: undefined,
        done: true,
      };
    },
  };
};

var n = JSON.stringify(obj);
console.log(n);
var value = obj[Symbol.iterator]();
for (value of obj) {
  console.log(value);
}

// console.log(z.next());
